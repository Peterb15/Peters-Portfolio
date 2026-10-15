// webenc <in> <out.mp4> <maxDim> <kbps> [start] [duration] [audio:0|1]  — H.264 (+AAC), fast-start
import AVFoundation
let a = CommandLine.arguments
let src = AVURLAsset(url: URL(fileURLWithPath: a[1])); let outURL = URL(fileURLWithPath: a[2])
let maxDim = CGFloat(Double(a[3])!); let kbps = Int(a[4])!
let start = a.count > 5 ? Double(a[5])! : 0; let dur = min(a.count > 6 ? Double(a[6])! : 1e9, CMTimeGetSeconds(src.duration) - start)
try? FileManager.default.removeItem(at: outURL)
let track = src.tracks(withMediaType: .video)[0]
let nat = track.naturalSize.applying(track.preferredTransform); let w0 = abs(nat.width), h0 = abs(nat.height)
let s = min(1, maxDim / max(w0, h0)); let W = Int((w0 * s / 2).rounded()) * 2, H = Int((h0 * s / 2).rounded()) * 2
let reader = try! AVAssetReader(asset: src)
reader.timeRange = CMTimeRange(start: CMTime(seconds: start, preferredTimescale: 600), duration: CMTime(seconds: dur, preferredTimescale: 600))
let comp = AVMutableVideoComposition(propertiesOf: src); comp.renderSize = CGSize(width: W, height: H)
let ins = AVMutableVideoCompositionInstruction(); ins.timeRange = CMTimeRange(start: .zero, duration: src.duration)
let li = AVMutableVideoCompositionLayerInstruction(assetTrack: track)
var t = track.preferredTransform; let tr = CGRect(origin: .zero, size: track.naturalSize).applying(t)
t = t.concatenating(CGAffineTransform(translationX: -tr.minX, y: -tr.minY)).concatenating(CGAffineTransform(scaleX: s, y: s))
li.setTransform(t, at: .zero); ins.layerInstructions = [li]; comp.instructions = [ins]
let out = AVAssetReaderVideoCompositionOutput(videoTracks: [track], videoSettings: [kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA])
out.videoComposition = comp; reader.add(out)
let writer = try! AVAssetWriter(outputURL: outURL, fileType: .mp4); writer.shouldOptimizeForNetworkUse = true
let inp = AVAssetWriterInput(mediaType: .video, outputSettings: [AVVideoCodecKey: AVVideoCodecType.h264, AVVideoWidthKey: W, AVVideoHeightKey: H,
  AVVideoCompressionPropertiesKey: [AVVideoAverageBitRateKey: kbps * 1000, AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel, AVVideoMaxKeyFrameIntervalKey: 60]])
inp.expectsMediaDataInRealTime = false; writer.add(inp)
let wantAudio = a.count > 7 && a[7] == "1"
var aOut: AVAssetReaderTrackOutput? = nil; var aIn: AVAssetWriterInput? = nil
if wantAudio, let at = src.tracks(withMediaType: .audio).first {
  let o = AVAssetReaderTrackOutput(track: at, outputSettings: [AVFormatIDKey: kAudioFormatLinearPCM]); reader.add(o); aOut = o
  let i = AVAssetWriterInput(mediaType: .audio, outputSettings: [AVFormatIDKey: kAudioFormatMPEG4AAC, AVNumberOfChannelsKey: 2, AVSampleRateKey: 44100, AVEncoderBitRateKey: 128000])
  i.expectsMediaDataInRealTime = false; writer.add(i); aIn = i
}
reader.startReading(); writer.startWriting(); writer.startSession(atSourceTime: CMTime(seconds: start, preferredTimescale: 600))
let g = DispatchGroup()
func pump(_ i: AVAssetWriterInput, _ o: AVAssetReaderOutput, _ label: String) {
  g.enter(); let q = DispatchQueue(label: label); var done = false
  i.requestMediaDataWhenReady(on: q) {
    while i.isReadyForMoreMediaData && !done {
      if let sb = o.copyNextSampleBuffer() { i.append(sb) } else { done = true; i.markAsFinished(); g.leave() }
    }
  }
}
pump(inp, out, "v"); if let ai = aIn, let ao = aOut { pump(ai, ao, "a") }
g.wait(); let sem = DispatchSemaphore(value: 0); writer.finishWriting { sem.signal() }; sem.wait(); print(writer.status == .completed ? "ok \(W)x\(H)" : "FAIL \(String(describing: writer.error))")

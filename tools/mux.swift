// mux <video.mp4> <audio.m4a> <out.mp4>  (passthrough)
import AVFoundation
let a = CommandLine.arguments
let v = AVURLAsset(url: URL(fileURLWithPath: a[1])), au = AVURLAsset(url: URL(fileURLWithPath: a[2]))
let comp = AVMutableComposition()
let vt = v.tracks(withMediaType: .video)[0], at = au.tracks(withMediaType: .audio)[0]
let dur = v.duration
let cv = comp.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid)!
try! cv.insertTimeRange(CMTimeRange(start: .zero, duration: dur), of: vt, at: .zero); cv.preferredTransform = vt.preferredTransform
let ca = comp.addMutableTrack(withMediaType: .audio, preferredTrackID: kCMPersistentTrackID_Invalid)!
try! ca.insertTimeRange(CMTimeRange(start: .zero, duration: min(dur, au.duration)), of: at, at: .zero)
let out = URL(fileURLWithPath: a[3]); try? FileManager.default.removeItem(at: out)
let ex = AVAssetExportSession(asset: comp, presetName: AVAssetExportPresetPassthrough)!
ex.outputURL = out; ex.outputFileType = .mp4; ex.shouldOptimizeForNetworkUse = true
let sem = DispatchSemaphore(value: 0); ex.exportAsynchronously { sem.signal() }; sem.wait()
print(ex.status == .completed ? "ok" : "FAIL \(String(describing: ex.error))")

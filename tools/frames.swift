import AVFoundation; import AppKit
let a = CommandLine.arguments; let url = URL(fileURLWithPath: a[1]); let out = a[2]; let pre = a[3]; let n = Int(a[4])!
let asset = AVURLAsset(url: url); let g = AVAssetImageGenerator(asset: asset); g.appliesPreferredTrackTransform = true; g.maximumSize = CGSize(width: 640, height: 640)
g.requestedTimeToleranceBefore = .zero; g.requestedTimeToleranceAfter = .zero
let d = CMTimeGetSeconds(asset.duration); print(pre, String(format: "%.1fs", d))
for i in 0..<n { let t = CMTime(seconds: d * (Double(i) + 0.5) / Double(n), preferredTimescale: 600)
  if let cg = try? g.copyCGImage(at: t, actualTime: nil) { let r = NSBitmapImageRep(cgImage: cg); try! r.representation(using: .jpeg, properties: [.compressionFactor: 0.75])!.write(to: URL(fileURLWithPath: "\(out)/\(pre)_\(i).jpg")) } }

import AVFoundation; import AppKit
// framesat <video> <outDir> <start> <end> <step>
let a = CommandLine.arguments; let asset = AVURLAsset(url: URL(fileURLWithPath: a[1])); let out = a[2]
let g = AVAssetImageGenerator(asset: asset); g.appliesPreferredTrackTransform = true; g.maximumSize = CGSize(width: 1600, height: 1600)
g.requestedTimeToleranceBefore = .zero; g.requestedTimeToleranceAfter = .zero
var t = Double(a[3])!; let end = Double(a[4])!, step = Double(a[5])!
while t <= end { if let cg = try? g.copyCGImage(at: CMTime(seconds: t, preferredTimescale: 600), actualTime: nil) {
  let r = NSBitmapImageRep(cgImage: cg); try! r.representation(using: .jpeg, properties: [.compressionFactor: 0.8])!.write(to: URL(fileURLWithPath: String(format: "%@/t%06.1f.jpg", out, t))) }; t += step }

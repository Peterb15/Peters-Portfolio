import AppKit
// crop <in> <out> <x> <y> <w> <h>   (pixels, origin top-left)
let a = CommandLine.arguments
let src = NSImage(contentsOfFile: a[1])!; var r = CGRect(x: 0, y: 0, width: src.size.width, height: src.size.height)
let cg = src.cgImage(forProposedRect: &r, context: nil, hints: nil)!
let c = cg.cropping(to: CGRect(x: Int(a[3])!, y: Int(a[4])!, width: Int(a[5])!, height: Int(a[6])!))!
let rep = NSBitmapImageRep(cgImage: c); try! rep.representation(using: .jpeg, properties: [.compressionFactor: 0.85])!.write(to: URL(fileURLWithPath: a[2]))

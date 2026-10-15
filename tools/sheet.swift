import AppKit
// usage: sheet out.jpg cols cellW file1 file2 ...   (labels each cell with its index)
let a = CommandLine.arguments; let out = a[1]; let cols = Int(a[2])!; let w = CGFloat(Int(a[3])!); let files = Array(a[4...])
let h = w * 0.75; let rows = (files.count + cols - 1) / cols
let img = NSImage(size: NSSize(width: w * CGFloat(cols), height: h * CGFloat(rows)))
img.lockFocus(); NSColor.white.setFill(); NSRect(x: 0, y: 0, width: img.size.width, height: img.size.height).fill()
for (i, f) in files.enumerated() {
  let r = i / cols, c = i % cols
  let cell = NSRect(x: CGFloat(c) * w, y: img.size.height - CGFloat(r + 1) * h, width: w, height: h)
  if let im = NSImage(contentsOfFile: f) {
    let s = min((w - 4) / im.size.width, (h - 4) / im.size.height); let dw = im.size.width * s, dh = im.size.height * s
    im.draw(in: NSRect(x: cell.midX - dw / 2, y: cell.midY - dh / 2, width: dw, height: dh))
  }
  let attrs: [NSAttributedString.Key: Any] = [.font: NSFont.boldSystemFont(ofSize: 16), .foregroundColor: NSColor.white, .backgroundColor: NSColor.black]
  NSString(string: " \(i) ").draw(at: NSPoint(x: cell.minX + 4, y: cell.maxY - 22), withAttributes: attrs)
}
img.unlockFocus()
let rep = NSBitmapImageRep(data: img.tiffRepresentation!)!; try! rep.representation(using: .jpeg, properties: [.compressionFactor: 0.6])!.write(to: URL(fileURLWithPath: out))

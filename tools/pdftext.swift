import PDFKit
let d = PDFDocument(url: URL(fileURLWithPath: CommandLine.arguments[1]))!
print("pages:", d.pageCount); print(d.string ?? "")

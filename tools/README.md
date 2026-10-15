# Media tools (macOS, no installs needed)

No ffmpeg on this Mac, so these small Swift tools use Apple's AVFoundation/AppKit/PDFKit.
Compile once: `swiftc -O -o tools/bin/<name> tools/<name>.swift` (tools/bin is gitignored).

| Tool | Usage | Notes |
|---|---|---|
| `webenc` | `webenc <in> <out.mp4> <maxDim> <kbps> [start] [duration] [audio 0/1]` | H.264 web video. With audio=1 it can deadlock on some files, so use the two-step below |
| `mux` | `mux <video.mp4> <audio.m4a> <out.mp4>` | Two-step with sound: `webenc` (no audio) + `avconvert -p PresetAppleM4A` for audio, then `mux` |
| `frames` | `frames <video> <outDir> <prefix> <count>` | Evenly spaced JPEG stills (max 640px; edit maxSize for bigger) |
| `sheet` | `sheet <out.jpg> <cols> <cellWidth> <images...>` | Numbered contact sheet for reviewing many photos |
| `pdftext` | `pdftext <file.pdf>` | Prints a PDF's text |

Images: `sips -s format jpeg -s formatOptions 82 -Z 2000 <in> --out <out.jpg>` (handles HEIC/TIFF/PNG).

## ARNOLD.EXE web build
Godot **4.3** (download `Godot_v4.3-stable_macos.universal.zip` + `Godot_v4.3-stable_export_templates.tpz` from github.com/godotengine/godot releases;
web templates go in `~/Library/Application Support/Godot/export_templates/4.3.stable/`).
Patched project copy + notes: `content/projects/arnold-exe/media/source-web-export/` (Dropbox only, not in git).
```
Godot --headless --path <copy> --import
Godot --headless --path <copy> --export-release "Web" <out>/index.html   # then copy index.* to public/play/arnold/
```

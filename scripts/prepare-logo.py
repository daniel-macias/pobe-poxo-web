"""Extract the Procreate animation into a sprite sheet for controlled playback.

Run with Python and Pillow after replacing public/pope_poxo_animated.png.
"""
import json
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parents[1]
source = Image.open(root / "public/pope_poxo_animated.png")
columns = 6
width, height = source.size
sheet = Image.new("RGBA", (width * columns, height * ((source.n_frames + columns - 1) // columns)))
durations = []
for index in range(source.n_frames):
    source.seek(index)
    frame = source.convert("RGBA")
    sheet.paste(frame, ((index % columns) * width, (index // columns) * height))
    durations.append(source.info.get("duration", 100))
sheet.save(root / "public/assets/logo-animation.png", optimize=True)
frame.save(root / "public/assets/logo-still.png", optimize=True)
(root / "components/logo-animation.json").write_text(json.dumps({
    "width": width, "height": height, "columns": columns, "durations": durations,
}, indent=2) + "\n")

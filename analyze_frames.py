import os
from PIL import Image

frames_dir = r"D:\SEA_SHELL_HOTEL_ANDAMAN\public\frames"
# Let's inspect every 25th frame
checkpoints = [1, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300]
for cp in checkpoints:
    filename = f"ezgif-frame-{cp:03d}.jpg"
    filepath = os.path.join(frames_dir, filename)
    if os.path.exists(filepath):
        img = Image.open(filepath)
        print(f"Frame {cp:03d} exists, size={img.size}")

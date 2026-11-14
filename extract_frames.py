import zipfile, os

zip_path = r"C:\Users\sugan\.gemini\antigravity\brain\93857b95-74ba-4984-b01e-a2ff534fa52e\.user_uploaded\media_1794404456155_9f95dd17.zip"
out_dir = r"D:\SEA_SHELL_HOTEL_ANDAMAN\public\frames"
os.makedirs(out_dir, exist_ok=True)
with zipfile.ZipFile(zip_path, 'r') as z:
    z.extractall(out_dir)

files = os.listdir(out_dir)
print(f"Extracted {len(files)} frames to {out_dir}")

# Check dimensions and details of frame 1
from PIL import Image
first_img = Image.open(os.path.join(out_dir, files[0]))
print("Frame dimensions:", first_img.size, first_img.format)

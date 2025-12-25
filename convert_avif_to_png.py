#!/usr/bin/env python3
"""Convert AVIF to PNG using imageio"""
import sys
from pathlib import Path

try:
    import imageio.v3 as iio
except ImportError:
    print("imageio not available. Installing...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "imageio", "imageio-ffmpeg"])
    import imageio.v3 as iio

def convert_avif_to_png(avif_path, png_path):
    """Convert AVIF image to PNG"""
    try:
        img = iio.imread(avif_path)
        iio.imwrite(png_path, img, format='PNG')
        print(f"Successfully converted {avif_path} to {png_path}")
        return True
    except Exception as e:
        print(f"Error converting {avif_path}: {e}")
        return False

if __name__ == "__main__":
    avif_file = Path("logos/sn-logo-color.avif")
    png_file = Path("logos/sn-logo-color.png")
    
    if not avif_file.exists():
        print(f"Error: {avif_file} not found")
        sys.exit(1)
    
    convert_avif_to_png(avif_file, png_file)


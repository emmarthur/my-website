#!/usr/bin/env python3
"""
Convert PDFs in the Docs folder to text files.
"""

import os
from pathlib import Path

try:
    import PyPDF2
    HAS_PYPDF2 = True
except ImportError:
    HAS_PYPDF2 = False

try:
    import pdfplumber
    HAS_PDFPLUMBER = True
except ImportError:
    HAS_PDFPLUMBER = False

def extract_text_pypdf2(pdf_path):
    """Extract text using PyPDF2."""
    text = ""
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
    return text

def extract_text_pdfplumber(pdf_path):
    """Extract text using pdfplumber (better for complex PDFs)."""
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    return text

def convert_pdf_to_txt(pdf_path, txt_path):
    """Convert a PDF file to a text file."""
    print(f"Converting: {pdf_path.name}")
    
    try:
        # Try pdfplumber first (better quality)
        if HAS_PDFPLUMBER:
            text = extract_text_pdfplumber(pdf_path)
        elif HAS_PYPDF2:
            text = extract_text_pypdf2(pdf_path)
        else:
            raise ImportError("No PDF library available")
        
        # Write to text file
        with open(txt_path, 'w', encoding='utf-8') as txt_file:
            txt_file.write(text)
        
        print(f"[OK] Created: {txt_path.name} ({len(text)} characters)")
        return True
    except Exception as e:
        print(f"[ERROR] Error converting {pdf_path.name}: {str(e)}")
        return False

def main():
    # Get the Docs folder path
    docs_folder = Path(__file__).parent / "Docs"
    
    if not docs_folder.exists():
        print(f"Error: Docs folder not found at {docs_folder}")
        return
    
    # Find all PDF files
    pdf_files = list(docs_folder.glob("*.pdf"))
    
    if not pdf_files:
        print("No PDF files found in Docs folder")
        return
    
    print(f"Found {len(pdf_files)} PDF file(s) in Docs folder\n")
    
    # Check if we have a PDF library
    if not HAS_PYPDF2 and not HAS_PDFPLUMBER:
        print("Error: No PDF library found!")
        print("Please install one of the following:")
        print("  pip install PyPDF2")
        print("  pip install pdfplumber")
        return
    
    if HAS_PDFPLUMBER:
        print("Using pdfplumber (recommended)")
    else:
        print("Using PyPDF2")
    print()
    
    # Convert each PDF
    success_count = 0
    for pdf_path in pdf_files:
        txt_path = pdf_path.with_suffix('.txt')
        if convert_pdf_to_txt(pdf_path, txt_path):
            success_count += 1
        print()
    
    print(f"Conversion complete: {success_count}/{len(pdf_files)} files converted")

if __name__ == "__main__":
    main()


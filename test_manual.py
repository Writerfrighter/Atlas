from pypdf import PdfReader
import time

pdf_path = "BIOBUZZ_Competition_Manual_TU01.pdf"
reader = PdfReader(pdf_path)
x=time.time()
print(f"{len(reader.pages)}")

rules_to_find = ["G101","C301"]

for rule in rules_to_find:

    found = False

    for page_number, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""

        if rule in text:
            print(f"Found on PDF page {page_number}")
            print(text[:2500])
            print()
            found = True
            break

    if not found:
        print("Not found")
        print({rule})
        print()
print(time.time()-x)
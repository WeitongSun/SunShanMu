import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

div_open = len(re.findall(r'<div\b[^>]*>', html))
div_close = len(re.findall(r'</div>', html))
print(f"div tags: open={div_open}, close={div_close}")

section_open = len(re.findall(r'<section\b[^>]*>', html))
section_close = len(re.findall(r'</section>', html))
print(f"section tags: open={section_open}, close={section_close}")

main_open = len(re.findall(r'<main\b[^>]*>', html))
main_close = len(re.findall(r'</main>', html))
print(f"main tags: open={main_open}, close={main_close}")


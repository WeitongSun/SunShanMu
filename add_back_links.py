import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Teaching
html = re.sub(r'(<section class="view teaching-entry" id="oops">)', r'\1\n          <a href="#teaching" class="back-link">← Back to Teaching</a>', html)
html = re.sub(r'(<section class="view teaching-entry" id="cce">)', r'\1\n          <a href="#teaching" class="back-link">← Back to Teaching</a>', html)

# Writing
html = re.sub(r'(<section class="entry view" id="endless-barrier">)', r'\1\n        <a href="#writing" class="back-link">← Back to Writing</a>', html)
html = re.sub(r'(<section class="entry view" id="emptiness">)', r'\1\n        <a href="#writing" class="back-link">← Back to Writing</a>', html)
html = re.sub(r'(<section class="entry view" id="rotation">)', r'\1\n        <a href="#writing" class="back-link">← Back to Writing</a>', html)

# Research
html = re.sub(r'(<section class="entry view" id="research-lsl">)', r'\1\n        <a href="#research" class="back-link">← Back to Research</a>', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Added back links!")

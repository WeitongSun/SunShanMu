import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Wrap all <section class="entry"...> with 'view'
html = html.replace('class="entry"', 'class="entry view"')
# 2. Update About and Contact to be views
html = html.replace('<div class="about-section" id="about">', '<section class="view" id="about"><div class="about-section">')
# Close the section for About. About ends before Contact.
html = html.replace('<section class="entry view" style="border-bottom:none; margin-bottom:80px;">', '</section>\n      <section class="entry view" style="border-bottom:none; margin-bottom:80px;">')

# Replace contact wrapping
html = html.replace('id="contact"', 'id="contact_inner"')
html = html.replace('<section class="entry view" style="border-bottom:none;">', '<section class="entry view" id="contact" style="border-bottom:none;">')


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("done")

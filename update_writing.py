import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove RESEARCH from sidebar links (lines 92 and 137 roughly, or just regex matching)
html = re.sub(r'\s*<div class="sb-group">\s*<a href="#research".*?</a>\s*</div>', '', html, flags=re.DOTALL)

# 2. Replace the #writing view
new_writing = '''      <section class="view" id="writing">
        <p class="section-heading" data-i18n="label-writing">Writing & Research</p>
        
        <div class="table-list">
          <div class="table-row">
            <div class="table-col-label">Essays / Publications</div>
            <div class="table-col-links">
              <a href="#thesis" class="table-link">→ From Ink to Code, From Binary to Boundless Reality</a>
              <a href="#endless-barrier" class="table-link">→ The Endless Barrier in Reading</a>
              <a href="#emptiness" class="table-link">→ Speaking Across Emptiness</a>
              <a href="#rotation" class="table-link">→ "Earth's Rotation Vertigo"</a>
            </div>
          </div>
          
          <div class="table-row">
            <div class="table-col-label">Academic Research</div>
            <div class="table-col-links">
              <a href="#lsl" class="table-link">→ Lab Streaming Layer Framework Research (Virtual Reality, Springer)</a>
            </div>
          </div>
        </div>
      </section>'''
html = re.sub(r'<section class="view" id="writing">.*?</section>', new_writing, html, flags=re.DOTALL)

# 3. Remove the #research view
html = re.sub(r'\s*<!-- ─────────────────────────────\s*RESEARCH\s*───────────────────────────── -->\s*<section class="view" id="research">.*?</section>', '', html, flags=re.DOTALL)

# 4. Update the back-link on the #lsl page to point to #writing
html = re.sub(r'(<section class="entry view" id="lsl">\n.*?)<a href="#research" class="back-link">← Back to Research</a>', r'\1<a href="#writing" class="back-link">← Back to Writing</a>', html)
# Wait, maybe the back link wasn't inside the entry body in exactly that order. 
# Let's just do:
html = html.replace('<a href="#research" class="back-link">← Back to Research</a>', '<a href="#writing" class="back-link">← Back to Writing</a>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html!")

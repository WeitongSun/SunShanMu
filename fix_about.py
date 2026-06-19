import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('''      <p class="section-heading" id="about" data-i18n="nav-about">About</p>

      </section>
      <section class="entry view" style="border-bottom:none; margin-bottom:80px;">''', '''      <section class="entry view" id="about" style="border-bottom:none; margin-bottom:80px;">''')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

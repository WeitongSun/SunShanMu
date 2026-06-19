import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace inline styles with classes
html = html.replace('class="teaching-list" style="list-style:none; padding:0; font-size:18px;"', 'class="overview-list"')
html = html.replace('style="color:var(--text); text-decoration:none;"', 'class="overview-link"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

with open('style.css', 'a', encoding='utf-8') as f:
    f.write('''
/* ── Overview Lists ── */
.overview-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.overview-link {
  color: var(--fg);
  text-decoration: none;
  font-family: var(--font);
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.01em;
  transition: color 0.3s ease, padding-left 0.3s ease;
  display: block;
}
.overview-link:hover {
  color: var(--accent);
  padding-left: 10px;
}
''')

print("Styles fixed!")

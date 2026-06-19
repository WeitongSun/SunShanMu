import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add #home view at the start of <main class="content">
home_view = """
      <!-- HOME / GENERATIVE 3D -->
      <section class="view" id="home" style="height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
        <canvas id="homeCanvas" style="width:100%; max-width:800px; height:60vh;"></canvas>
      </section>
"""
if 'id="home"' not in html:
    html = html.replace('<main class="content">\n', '<main class="content">\n' + home_view)

# For Teaching overview, we need to create an index. We'll just change teaching-list to be id="teaching"
html = html.replace('<div class="teaching-list">', '<section class="view" id="teaching"><div class="teaching-list">')
# Close teaching overview before #oops
html = html.replace('<!-- OOPS! -->', '</div></section>\n\n        <!-- OOPS! -->')
# We must ensure oops, cce, 3da are views.
html = html.replace('<div class="teaching-entry" id="oops">', '<section class="view teaching-entry" id="oops">')
html = html.replace('<!-- CCE -->\n        <div class="teaching-entry" id="cce">', '</section>\n\n        <!-- CCE -->\n        <section class="view teaching-entry" id="cce">')
html = html.replace('<!-- 3D Computer Art -->\n        <div class="teaching-entry" id="3da">', '</section>\n\n        <!-- 3D Computer Art -->\n        <section class="view teaching-entry" id="3da">')
html = html.replace('<!-- ─────────────────────────────\n         WRITING', '</section>\n\n      <!-- ─────────────────────────────\n         WRITING')

# Writing overview
html = html.replace('<p class="section-heading" data-i18n="label-writing">Writing</p>', '<section class="view" id="writing"><p class="section-heading" data-i18n="label-writing">Writing</p><ul class="teaching-list" style="list-style:none; padding:0; font-size:18px;"><li><a href="#thesis" style="color:var(--text); text-decoration:none;">From Ink to Code… ↘</a></li><li><a href="#endless-barrier" style="color:var(--text); text-decoration:none;">The Endless Barrier in Reading ↘</a></li><li><a href="#emptiness" style="color:var(--text); text-decoration:none;">Speaking Across Emptiness ↘</a></li><li><a href="#rotation" style="color:var(--text); text-decoration:none;">"Earth\'s Rotation Vertigo" ↘</a></li></ul></section>')

# Research overview
html = html.replace('<p class="section-heading" data-i18n="label-research">Research</p>', '<section class="view" id="research"><p class="section-heading" data-i18n="label-research">Research</p><ul class="teaching-list" style="list-style:none; padding:0; font-size:18px;"><li><a href="#lsl" style="color:var(--text); text-decoration:none;">Lab Streaming Layer Research ↘</a></li></ul></section>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("done")

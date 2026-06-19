import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove float-world
html = re.sub(r'<!-- ══ FLOATING HOMEPAGE ══ -->.*?<section class="entry view" id="collision-at-a-distance">', '<section class="entry view" id="collision-at-a-distance">', html, flags=re.DOTALL)

# Revert Collision
col_new = '''        <div class="img-wrap" style="margin-bottom: 40px;">
          <img src="images/collision-at-a-distance/IMG_2833.png" alt="Collision at a Distance — simulation view">
        </div>
        <p class="img-caption" data-i18n="cap-simulation-view">Simulation view</p>
        <div class="img-wrap" style="margin-top:40px; margin-bottom: 40px;">
          <img src="images/collision-at-a-distance/animated-result-iso3.gif" alt="Collision at a Distance — animation"
            style="width:100%;display:block;">
        </div>
        <p class="img-caption" data-i18n="cap-animation">Animation</p>'''
html = re.sub(r'<div class="unified-carousel">.*?images/collision-at-a-distance/IMG_2833.png.*?</div>\s*</div>', col_new, html, flags=re.DOTALL)

# Revert Ideal Home
ideal_new = '''        <div class="img-wrap" style="margin-bottom: 40px;">
          <img src="images/ideal-home/SUN_Q2A8078B.png" alt="Ideal Home — installation view">
        </div>
        <p class="img-caption" data-i18n="cap-install-view">Installation view</p>
        <div class="img-wrap" style="margin-bottom: 40px;">
          <img src="images/ideal-home/SUN_Q2A8181.png" alt="Ideal Home — detail">
        </div>
        <p class="img-caption" data-i18n="cap-detail">Detail</p>
        <div class="img-wrap" style="margin-bottom: 40px;">
          <img src="images/ideal-home/iH.png" alt="Ideal Home — audience" style="width:100%;display:block;">
        </div>
        <div class="img-wrap" style="margin-bottom: 40px;">
          <img src="images/ideal-home/SUN_Q2A8093.png" alt="Ideal Home — VR headset" style="width:100%;display:block;">
        </div>'''
html = re.sub(r'<div class="unified-carousel">.*?images/ideal-home/SUN_Q2A8078B.png.*?</div>\s*</div>', ideal_new, html, flags=re.DOTALL)

# Revert Graceful Site
grace_new = '''        <div class="img-wrap" style="margin-bottom: 40px;">
          <img src="images/graceful-site/BP1.png" alt="The Graceful Site — installation view">
        </div>
        <p class="img-caption" data-i18n="cap-install-view">Installation view</p>
        <div class="img-wrap" style="margin-bottom: 40px;">
          <img src="images/graceful-site/The%20Graceful%20Site_1.png" alt="The Graceful Site — interior" style="width:100%;display:block;">
        </div>
        <div class="img-wrap" style="margin-bottom: 40px;">
          <img src="images/graceful-site/The%20Graceful%20Site_5.png" alt="The Graceful Site — night" style="width:100%;display:block;">
        </div>'''
html = re.sub(r'<div class="unified-carousel">.*?images/graceful-site/BP1.png.*?</div>\s*</div>', grace_new, html, flags=re.DOTALL)

# Revert OOPS!
oops_new = '''          <div class="img-wrap" style="margin-bottom: 40px;">
            <img src="images/oops/ig1.png" alt="Course announcement">
          </div>
          <div class="img-wrap" style="margin-bottom: 40px;">
            <img src="images/oops/ig4.png" alt="Student work: First Day at Work">
          </div>
          <div class="img-wrap" style="margin-bottom: 40px;">
            <img src="images/oops/ig3.png" alt="End-of-session showcase">
          </div>
          <div class="img-wrap" style="margin-bottom: 40px;">
            <img src="images/oops/sfpc-blog.jpg" alt="SFPC blog post">
          </div>'''
html = re.sub(r'<div class="unified-carousel">.*?images/oops/ig1.png.*?</div>\s*</div>', oops_new, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Reverted carousels!")

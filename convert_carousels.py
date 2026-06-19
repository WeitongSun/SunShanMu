import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Collision at a Distance
collision_old = '''        <div class="img-wrap">
          <img src="images/collision-at-a-distance/IMG_2833.png" alt="Collision at a Distance — simulation view">
        </div>
        <p class="img-caption" data-i18n="cap-simulation-view">Simulation view</p>
        <div class="img-wrap" style="margin-top:20px;">
          <img src="images/collision-at-a-distance/animated-result-iso3.gif" alt="Collision at a Distance — animation"
            style="width:100%;display:block;">
        </div>
        <p class="img-caption" data-i18n="cap-animation">Animation</p>'''

collision_new = '''        <div class="unified-carousel">
          <div class="carousel-track">
            <img class="carousel-slide active" src="images/collision-at-a-distance/IMG_2833.png" alt="Simulation view">
            <img class="carousel-slide" src="images/collision-at-a-distance/animated-result-iso3.gif" alt="Animation">
          </div>
          <button class="carousel-btn prev">←</button>
          <button class="carousel-btn next">→</button>
          <div class="carousel-indicators"></div>
        </div>'''

html = html.replace(collision_old, collision_new)

# 2. Ideal Home
ideal_old = '''        <div class="img-wrap">
          <img src="images/ideal-home/SUN_Q2A8078B.png" alt="Ideal Home — installation view">
        </div>
        <p class="img-caption" data-i18n="cap-install-view">Installation view</p>
        <div class="img-wrap">
          <img src="images/ideal-home/SUN_Q2A8181.png" alt="Ideal Home — detail">
        </div>
        <p class="img-caption" data-i18n="cap-detail">Detail</p>
        <div class="img-grid-2">
          <img src="images/ideal-home/iH.png" alt="Ideal Home — audience" style="width:100%;display:block;">
          <img src="images/ideal-home/SUN_Q2A8093.png" alt="Ideal Home — VR headset" style="width:100%;display:block;">
        </div>'''

ideal_new = '''        <div class="unified-carousel">
          <div class="carousel-track">
            <img class="carousel-slide active" src="images/ideal-home/SUN_Q2A8078B.png" alt="Installation view">
            <img class="carousel-slide" src="images/ideal-home/SUN_Q2A8181.png" alt="Detail">
            <img class="carousel-slide" src="images/ideal-home/iH.png" alt="Audience">
            <img class="carousel-slide" src="images/ideal-home/SUN_Q2A8093.png" alt="VR headset">
          </div>
          <button class="carousel-btn prev">←</button>
          <button class="carousel-btn next">→</button>
          <div class="carousel-indicators"></div>
        </div>'''

html = html.replace(ideal_old, ideal_new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated Collision and Ideal Home")

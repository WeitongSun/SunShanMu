import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the home section
new_home = '''      <!-- ── Home / Tour Slideshow ── -->
      <section class="view active" id="home" style="display:block;">
        <div class="home-tour">
          <div class="home-slideshow">
            <img class="home-slide active" src="images/ideal-home/SUN_Q2A8078B.png" alt="Ideal Home">
            <img class="home-slide" src="images/ideal-home/SUN_Q2A8181.png" alt="Ideal Home Detail">
            <img class="home-slide" src="images/ideal-home/iH.png" alt="Ideal Home Audience">
          </div>
          <div class="home-news" style="margin-top: 40px; font-size: 14px; color: var(--text);">
            <p><strong>CURRENTLY ON TOUR</strong><br>
            <em>Ideal Home</em><br>
            Ars Electronica Festival, Linz, Austria<br>
            2025</p>
          </div>
        </div>
      </section>'''

html = re.sub(r'<section class="view" id="home".*?</section>', new_home, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

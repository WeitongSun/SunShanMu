import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

graceful_old = '''        <div class="img-wrap">
          <img src="images/graceful-site/BP1.png" alt="The Graceful Site — installation view">
        </div>
        <p class="img-caption" data-i18n="cap-install-view">Installation view</p>
        <div class="img-grid-2">
          <img src="images/graceful-site/The%20Graceful%20Site_1.png" alt="The Graceful Site — interior"
            style="width:100%;display:block;">
          <img src="images/graceful-site/The%20Graceful%20Site_5.png" alt="The Graceful Site — night"
            style="width:100%;display:block;">
        </div>'''

graceful_new = '''        <div class="unified-carousel">
          <div class="carousel-track">
            <img class="carousel-slide active" src="images/graceful-site/BP1.png" alt="Installation view">
            <img class="carousel-slide" src="images/graceful-site/The%20Graceful%20Site_1.png" alt="Interior">
            <img class="carousel-slide" src="images/graceful-site/The%20Graceful%20Site_5.png" alt="Night">
          </div>
          <button class="carousel-btn prev">←</button>
          <button class="carousel-btn next">→</button>
          <div class="carousel-indicators"></div>
        </div>'''

html = html.replace(graceful_old, graceful_new)

oops_old = '''          <div class="teaching-images">
            <img src="images/oops/ig1.png" alt="Course announcement">
            <img src="images/oops/ig4.png" alt="Student work: First Day at Work">
            <img src="images/oops/ig3.png" alt="End-of-session showcase">
            <img src="images/oops/sfpc-blog.jpg" alt="SFPC blog post">
          </div>'''

oops_new = '''          <div class="unified-carousel">
            <div class="carousel-track">
              <img class="carousel-slide active" src="images/oops/ig1.png" alt="Course announcement">
              <img class="carousel-slide" src="images/oops/ig4.png" alt="Student work">
              <img class="carousel-slide" src="images/oops/ig3.png" alt="Showcase">
              <img class="carousel-slide" src="images/oops/sfpc-blog.jpg" alt="Blog post">
            </div>
            <button class="carousel-btn prev">←</button>
            <button class="carousel-btn next">→</button>
            <div class="carousel-indicators"></div>
          </div>'''

html = html.replace(oops_old, oops_new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated Graceful Site and OOPS")

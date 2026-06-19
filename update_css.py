import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add Home Slideshow and Back Link styles
new_css = '''/* ── Home Slideshow ── */
.home-tour {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.home-slideshow {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 60vh;
}
.home-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}
.home-slide.active {
  opacity: 1;
}

/* ── Back Link ── */
.back-link {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--text);
  opacity: 0.6;
  text-decoration: none;
  margin-bottom: 24px;
  transition: opacity 0.2s;
}
.back-link:hover {
  opacity: 1;
}
'''

# We will just append it if not already there
if '.home-tour' not in css:
    css += '\n' + new_css

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("Updated CSS!")

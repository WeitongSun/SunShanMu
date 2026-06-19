with open('style.css', 'a', encoding='utf-8') as f:
    f.write('''
/* ── Unified Carousel ── */
.unified-carousel {
  position: relative;
  width: 100%;
  max-height: 80vh;
  margin: 32px 0;
  background: var(--bg);
  border: 1px solid var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.carousel-track {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  pointer-events: none;
}
.carousel-slide.active {
  opacity: 1;
  position: relative;
  pointer-events: auto;
}
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--light);
  color: var(--text);
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.carousel-btn:hover {
  background: var(--text);
  color: var(--bg);
}
.carousel-btn.prev {
  left: 16px;
}
.carousel-btn.next {
  right: 16px;
}
.carousel-indicators {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}
.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(0,0,0,0.2);
  cursor: pointer;
  transition: background 0.2s;
}
.carousel-dot.active {
  background: var(--text);
}
''')
print("Appended CSS")

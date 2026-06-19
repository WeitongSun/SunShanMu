import re

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Remove intersection observer logic
js = re.sub(r'// ── Section scroll-reveal ────────────────────.*?revealEls\.forEach\(el => revealObs\.observe\(el\)\);', '', js, flags=re.DOTALL)
js = re.sub(r'// ── Active sidebar link ───────────────────────.*?document\.querySelectorAll\(\'section\[id\]\'\)\.forEach\(s => sectionObserver\.observe\(s\)\);', '', js, flags=re.DOTALL)

# 2. Add SPA and 3D logic
spa_logic = """
// ── SPA Router ──────────────────────────────
function handleRoute() {
  const hash = window.location.hash || '#home';
  
  // Hide all views
  document.querySelectorAll('.view').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('active-view');
  });
  
  // Show target view
  const target = document.querySelector(hash);
  if (target) {
    target.style.display = 'block';
    setTimeout(() => target.classList.add('active-view'), 10);
    window.scrollTo(0, 0);
  }

  // Update active states in sidebar
  document.querySelectorAll('.sb-list a, .mobile-nav a, .sb-group-label, .sb-info a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === hash) {
      a.classList.add('active');
    }
  });

  if (hash === '#home' && typeof resizeHomeCanvas === 'function') {
    resizeHomeCanvas();
  }
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

// ── Generative 3D Canvas for Home View ────────────────────
let homeScene, homeCamera, homeRenderer, homeMesh;

function initHomeCanvas() {
  const canvas = document.getElementById('homeCanvas');
  if (!canvas || !window.THREE) return;

  homeScene = new THREE.Scene();
  homeScene.background = new THREE.Color(0xfcfcfc);

  homeCamera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  homeCamera.position.z = 5;

  homeRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  homeRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  homeRenderer.setPixelRatio(window.devicePixelRatio);

  const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
  const material = new THREE.MeshNormalMaterial({ wireframe: true });
  homeMesh = new THREE.Mesh(geometry, material);
  homeScene.add(homeMesh);

  const animate = function () {
    requestAnimationFrame(animate);
    if (document.getElementById('home') && document.getElementById('home').style.display !== 'none') {
      homeMesh.rotation.x += 0.005;
      homeMesh.rotation.y += 0.01;
      const time = Date.now() * 0.001;
      homeMesh.scale.x = 1 + Math.sin(time) * 0.1;
      homeMesh.scale.y = 1 + Math.cos(time) * 0.1;
      homeRenderer.render(homeScene, homeCamera);
    }
  };
  animate();
}

function resizeHomeCanvas() {
  if (!homeCamera || !homeRenderer) return;
  const canvas = document.getElementById('homeCanvas');
  if(canvas) {
    homeCamera.aspect = canvas.clientWidth / canvas.clientHeight;
    homeCamera.updateProjectionMatrix();
    homeRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }
}

window.addEventListener('resize', resizeHomeCanvas);
window.addEventListener('DOMContentLoaded', initHomeCanvas);
"""

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(spa_logic + "\n" + js)

print("done")

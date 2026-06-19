import re

with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

new_3d_code = '''// ── Generative 3D Home View ─────────────────
let homeScene, homeCamera, homeRenderer, homeMesh;

function init3D() {
  const canvas = document.getElementById('home-canvas');
  if (!canvas || !window.THREE) return;
  
  homeScene = new THREE.Scene();
  homeScene.background = new THREE.Color(0xfcfcfc);
  
  homeCamera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  homeCamera.position.z = 5;
  
  homeRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  homeRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  homeRenderer.setPixelRatio(window.devicePixelRatio);
  
  // Create generative abstract geometry based on website content
  const contentLen = document.body.innerText.length;
  const numSegments = Math.max(30, contentLen % 150);
  const detail = Math.max(2, (contentLen % 7));
  
  const geometry = new THREE.IcosahedronGeometry(1.5, detail);
  
  // Deform vertices pseudo-randomly
  const pos = geometry.attributes.position;
  const v = new THREE.Vector3();
  for(let i=0; i<pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      v.normalize().multiplyScalar(1.2 + 0.4 * Math.sin(v.x * 5) * Math.cos(v.y * 5 + contentLen));
      pos.setXYZ(i, v.x, v.y, v.z);
  }
  geometry.computeVertexNormals();

  const material = new THREE.MeshPhysicalMaterial({ 
      color: 0x0044ff, 
      wireframe: true,
      roughness: 0.2,
      transmission: 0.9,
      thickness: 0.5
  });
  
  homeMesh = new THREE.Mesh(geometry, material);
  homeScene.add(homeMesh);
  
  // Add lights
  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(1, 1, 2);
  homeScene.add(light1);
  
  const light2 = new THREE.AmbientLight(0x404040);
  homeScene.add(light2);
  
  animate3D();
}

function resizeHomeCanvas() {
  const canvas = document.getElementById('home-canvas');
  if (!canvas || !homeCamera || !homeRenderer) return;
  homeCamera.aspect = canvas.clientWidth / canvas.clientHeight;
  homeCamera.updateProjectionMatrix();
  homeRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

function animate3D() {
  requestAnimationFrame(animate3D);
  if (homeMesh) {
    homeMesh.rotation.x += 0.003;
    homeMesh.rotation.y += 0.005;
  }
  if (homeRenderer && homeScene && homeCamera) {
    homeRenderer.render(homeScene, homeCamera);
  }
}

window.addEventListener('resize', resizeHomeCanvas);
document.addEventListener('DOMContentLoaded', init3D);'''

js = re.sub(r'// ── Generative 3D Home View ─────────────────.*?document\.addEventListener\(\'DOMContentLoaded\', init3D\);', new_3d_code, js, flags=re.DOTALL)

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_home_html = '''      <section class="view" id="home" style="position:relative; width:100%; height:80vh; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <h1 style="position:absolute; z-index:10; font-family:var(--font); font-size:48px; color:var(--text); text-align:center; pointer-events:none; letter-spacing:-0.02em;">ShanMu Sun<br><span style="font-size:16px; font-weight:400; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted);">Selected Works & Research</span></h1>
        <canvas id="home-canvas" style="width:100%; height:100%; display:block; outline:none;"></canvas>
      </section>'''

html = re.sub(r'<section class="view" id="home">.*?</section>', new_home_html, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("3D and Home HTML updated!")

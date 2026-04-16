// ── Image fade-in on load ────────────────────
document.querySelectorAll(
  '.img-wrap img, .img-grid-2 img, .about-portrait img'
).forEach(img => {
  img.style.opacity = '0';
  const show = () => { img.style.opacity = '1'; };
  if (img.complete && img.naturalWidth > 0) {
    requestAnimationFrame(() => requestAnimationFrame(show));
  } else {
    img.addEventListener('load',  show);
    img.addEventListener('error', show);
  }
});

// ── Section scroll-reveal ────────────────────
const revealEls = document.querySelectorAll('.entry, .section-heading');
revealEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition =
    'opacity 0.65s cubic-bezier(0.33, 0, 0.2, 1), ' +
    'transform 0.65s cubic-bezier(0.33, 0, 0.2, 1)';
});
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = 'translateY(0)';
      revealObs.unobserve(e.target);
    }
  });
}, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });
revealEls.forEach(el => revealObs.observe(el));

// ── Menu toggle ──────────────────────────────
function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileNav').classList.remove('open');
}

// ── Active sidebar link ───────────────────────
const allLinks = document.querySelectorAll('.sb-list a, .mobile-nav a');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      allLinks.forEach(a => a.classList.remove('active'));
      allLinks.forEach(a => {
        if (a.getAttribute('href') === '#' + entry.target.id)
          a.classList.add('active');
      });
    }
  });
}, { rootMargin: '-10% 0px -80% 0px' });
document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

// ── Language toggle ───────────────────────────
const T = {
  'label-works':    { en: 'Works',    zh: '作品' },
  'label-teaching': { en: 'Teaching', zh: '教学' },
  'label-writing':  { en: 'Writing',  zh: '写作' },
  'label-research': { en: 'Research', zh: '研究' },
  'nav-ideal-home':      { en: 'Ideal Home',                    zh: '理想之家' },
  'nav-graceful-site':   { en: 'The Graceful Site',             zh: '优美地高于生活' },
  'nav-sense':           { en: 'Say Sense is Not Everything',   zh: '感官并非一切' },
  'nav-shimmering':      { en: 'Polyphonic Shimmering',         zh: 'Polyphonic Shimmering' },
  'nav-oops':            { en: 'OOPS! (Off-Purpose Software)',  zh: 'OOPS!（偏离目的的软件）' },
  'nav-endless-barrier': { en: 'The Endless Barrier in Reading',zh: '阅读中无尽的壁垒' },
  'nav-emptiness':       { en: 'Speaking Across Emptiness',     zh: '穿越虚空言说' },
  'nav-rotation':        { en: '"Earth\'s Rotation Vertigo"',   zh: '《地球自转眩晕症》' },
  'nav-lsl':             { en: 'Lab Streaming Layer Research',  zh: 'LSL框架研究' },
  'nav-about':           { en: 'Bio',     zh: '简介' },
  'nav-contact':         { en: 'Contact', zh: '联系方式' },
  'menu-btn':            { en: 'Projets', zh: '作品' },

  'meta-ideal-home':    { en: '2025 · XR · Ars Electronica, Linz, Austria',
                          zh: '2025 · XR · Ars Electronica，奥地利林茨' },
  'meta-graceful-site': { en: '2024 · Live Simulation<br>w/ Ruiqi Zhang',
                          zh: '2024 · Live Simulation<br>与 Ruiqi Zhang 合作' },
  'meta-sense':         { en: 'Web Publication · Collaborative',
                          zh: '网络出版物 · 合作项目' },
  'meta-shimmering':    { en: 'Collaborative Web · Publication',
                          zh: '合作网络 · 出版物' },
  'meta-oops':          { en: 'Fall 2025 · 7-week online course · School for Poetic Computation (SFPC)<br>Co-taught with Herdimas Anggara &amp; Rasim Bayramov',
                          zh: '2025年秋 · 7周在线课程 · 诗意计算学院（SFPC）<br>与 Herdimas Anggara &amp; Rasim Bayramov 共同教授' },
  'meta-endless-barrier':{ en: 'Essay · Substack — Bad Sense',
                           zh: '文章 · Substack — Bad Sense' },
  'meta-emptiness':     { en: 'Essay · sensenoteverything.zip',
                          zh: '文章 · sensenoteverything.zip' },
  'meta-rotation':      { en: 'Text · Polyphonic Shimmering',
                          zh: '文本 · Polyphonic Shimmering' },
  'meta-lsl':           { en: '2023 · Research Paper · Virtual Reality, Springer',
                          zh: '2023 · 研究论文 · Virtual Reality，Springer出版' },

  'cap-install-view':  { en: 'Installation view',  zh: '装置现场' },
  'cap-detail':        { en: 'Detail',              zh: '细节' },
  'cap-sense':         { en: 'sensenoteverything.zip', zh: 'sensenoteverything.zip' },
  'cap-shimmering':    { en: 'shimmering.world',    zh: 'shimmering.world' },
  'cap-oops-announce': { en: 'Course announcement — SFPC, Fall 2025',
                         zh: '课程公告 — SFPC，2025年秋' },
  'cap-oops-taught':   { en: 'Taught by Herdimas Anggara, ShanMu Sun &amp; Rasim Bayramov',
                         zh: '由 Herdimas Anggara、孙山木 &amp; Rasim Bayramov 教授' },
  'cap-oops-student':  { en: 'Student work: "First Day at Work"', zh: '学生作品："第一天上班"' },
  'cap-oops-showcase': { en: 'End-of-session showcase, Dec 17, 2025', zh: '期末展示，2025年12月17日' },
  'cap-oops-blog':     { en: '"I never want anything to work ever again" — written by Rasim Bayramov &amp; Weitong "Shanmu" Sun, SFPC Fall 2025',
                         zh: '《我永远不想让任何事情正常运作》—— Rasim Bayramov &amp; 孙山木撰，SFPC 2025年秋' },
  'body-ideal-home':   { en: '<p>Ideal Home is an extended-reality (XR) narrative project that explores how immigrant experiences and the evolving concept of home are reshaped through emerging technologies. Central to the story is a ghostly AI avatar that drifts through layered interfaces, landscapes, symbols, and code.</p><p>Combining generative AI, immersive XR environments, and collaborative writing, the project constructs a fragmented, non-linear story world shaped by multiple voices. The artist invited immigrant writers to co-create a text archive based on their experiences of longing, memory, and displacement. A fine-tuned GPT-4 model then rewrote a unified script, blending distinct writing styles and transforming cultural symbols into something unexpected.</p><p>By embedding the script into a game engine, the project blurs the line between oral history and generative fiction, offering an alternative mode of engagement. The AI avatar acts as a narrator and emotional guide, accompanying the player through flickering memory objects, dreamlike spaces, and cultural echoes. Ideal Home becomes a speculative space where collective memory and machine intelligence co-author a new language for belonging.</p><p><a href="https://ars.electronica.art/panic/en/view/self-reflexive-worlds-ideal-home-text-textures-20e38ddb450c81a289b2d2d5313c948f/" target="_blank">View at Ars Electronica →</a></p><p><a href="https://arts.vcu.edu/the-work/ideal-home/" target="_blank">VCUarts documentation →</a></p>',
                         zh: '<p>《理想之家》是一个扩展现实（XR）叙事项目，探索移民经历与"家"的概念如何在新兴技术的重塑下演变。故事的核心是一个幽灵般的 AI 化身，在层叠的界面、景观、符号与代码之间漂游。</p><p>项目结合生成式 AI、沉浸式 XR 环境与协作写作，构建出一个由多重声音共同塑造的碎片化、非线性故事世界。艺术家邀请移民写作者基于各自对思念、记忆与流离的经验共同创作文本档案；经过微调的 GPT-4 模型随后将多种写作风格融合为一个统一的脚本，并将文化符号转化为出乎意料的全新形态。</p><p>通过将脚本嵌入游戏引擎，项目模糊了口述历史与生成式虚构之间的边界，提供另一种参与方式。AI 化身作为叙述者与情感引导者，陪伴玩家穿越闪烁的记忆物件、梦境般的空间与文化回响。《理想之家》成为一个思辨性空间，集体记忆与机器智能在此共同书写一套关于归属的新语言。</p><p><a href="https://ars.electronica.art/panic/en/view/self-reflexive-worlds-ideal-home-text-textures-20e38ddb450c81a289b2d2d5313c948f/" target="_blank">在 Ars Electronica 查看 →</a></p><p><a href="https://arts.vcu.edu/the-work/ideal-home/" target="_blank">VCUarts 文档 →</a></p>' },
  'body-graceful-site':{ en: '<p>A collaborative 24/7 real-time Live Simulation project with Ruiqi Zhang, presented at The Wrong Biennial 2024, Black Brick Project(Brooklyn, NY), INSTINC SPACE(Singapore), Odds&amp;Ends Film Festival(Charlottesville, VA), and others.</p><p><a href="https://screensaversforadyingworld.com/ruiqi-zhang-shanmu-sun" target="_blank">View project →</a></p>',
                         zh: '<p>与 Ruiqi Zhang 合作的24/7实时仿真项目，曾在The Wrong双年展2024、Black Brick Project（纽约布鲁克林）、INSTINC SPACE（新加坡）、Odds&amp;Ends电影节（夏洛茨维尔）等地展出。</p><p><a href="https://screensaversforadyingworld.com/ruiqi-zhang-shanmu-sun" target="_blank">查看项目 →</a></p>' },
  'body-sense':        { en: '<p>A collaborative web publication and project.</p><p><a href="https://sensenoteverything.zip" target="_blank">sensenoteverything.zip →</a></p>',
                         zh: '<p>一个协作式网络出版物与项目。</p><p><a href="https://sensenoteverything.zip" target="_blank">sensenoteverything.zip →</a></p>' },
  'body-shimmering':   { en: '<p>A collaborative web publication exploring polyphonic and shimmering forms of expression.</p><p><a href="https://shimmering.world/index.html" target="_blank">shimmering.world →</a></p>',
                         zh: '<p>一个探索复调光韵表达形式的协作网络出版物。</p><p><a href="https://shimmering.world/index.html" target="_blank">shimmering.world →</a></p>' },
  'body-oops-desc':    { en: '<p>A 7-week class about using serious tools unseriously. Students explore Google Workspace (Docs, Sheets, Slides, Forms) and push it to the edge of breakdown — writing Apps Script as revisionist memoir, using autofill as a timing device, and finding other methods of misuse through scripting or overly literal obedience.</p>',
                         zh: '<p>一门为期七周的课程，以认真的方式使用正经工具。学生探索谷歌工作空间（文档、表格、幻灯片、表单），将其推向崩溃边缘——用Apps Script书写修正主义回忆录，用自动填充充当计时装置，并通过脚本或过于字面的服从寻找其他误用方式。</p>' },
  'body-oops-links':   { en: '<p><a href="https://sfpc.study/blog/oops" target="_blank">Read blog post →</a></p><p><a href="https://www.instagram.com/p/DMgT9boJi7X/" target="_blank">Course announcement →</a><br><a href="https://www.instagram.com/reel/DSVnIhSERyu/" target="_blank">Showcase reel →</a><br><a href="https://www.instagram.com/p/DSa0dFdjG4r/" target="_blank">Student work documentation →</a></p>',
                         zh: '<p><a href="https://sfpc.study/blog/oops" target="_blank">阅读博文 →</a></p><p><a href="https://www.instagram.com/p/DMgT9boJi7X/" target="_blank">课程公告 →</a><br><a href="https://www.instagram.com/reel/DSVnIhSERyu/" target="_blank">展示视频 →</a><br><a href="https://www.instagram.com/p/DSa0dFdjG4r/" target="_blank">学生作品记录 →</a></p>' },
  'body-lsl':          { en: '<p>Published research on the Lab Streaming Layer framework, exploring real-time biosignal data in XR environments.</p><p><a href="https://link.springer.com/article/10.1007/s10055-023-00799-8" target="_blank">Read on Springer →</a></p>',
                         zh: '<p>关于Lab Streaming Layer框架的研究论文，探索XR环境中的实时生物信号数据传输。</p><p><a href="https://link.springer.com/article/10.1007/s10055-023-00799-8" target="_blank">在Springer阅读 →</a></p>' },
  'body-about':        { en: '<p>I am a Chinese artist and writer, currently based in the United States. I am interested in the intersection of art, literature, and technology.</p><p>My work often explores themes of identity, culture, and the human experience. I consider myself an experimental artist who explores live simulation, digital storytelling, artificial intelligence, and the methodology of programming languages.</p><p>My practice explores the complexity of emerging technology and computation as an alternative narrative container.</p><p>My work has been exhibited internationally at venues such as Ars Electronica (Linz, Austria), Black Brick Project (NYC, US), Instinc (Singapore), ICAVCU (Richmond, VA), and others.</p><p>Faculty at <a href="https://arts.vcu.edu" target="_blank">VCU Arts</a> &amp; VCU Kinetic Imaging.</p><p style="margin-top:20px;"><a href="https://docs.google.com/document/d/13DrJOb4szQ0I-Ok4nJazExAmsGchdk1bxqghSpA8GRM/edit?usp=sharing" target="_blank">Download CV →</a></p>',
                         zh: '<p>我是一位旅居美国的中国艺术家与写作者，关注艺术、文学与技术的交汇地带。</p><p>我的创作常探索身份、文化与人类经验等主题。我将自己视为一位实验性艺术家，涉足实时仿真、数字叙事、人工智能以及编程语言的方法论。</p><p>我的实践探索新兴技术的复杂性，并将计算视为另一种叙事容器。</p><p>我的作品曾在国际多地展出，包括 Ars Electronica（奥地利林茨）、Black Brick Project（美国纽约）、Instinc（新加坡）、ICAVCU（弗吉尼亚里士满）等。</p><p><a href="https://arts.vcu.edu" target="_blank">VCU Arts</a> &amp; VCU Kinetic Imaging 教师。</p><p style="margin-top:20px;"><a href="https://docs.google.com/document/d/13DrJOb4szQ0I-Ok4nJazExAmsGchdk1bxqghSpA8GRM/edit?usp=sharing" target="_blank">下载简历 →</a></p>' },
};

let currentLang = 'en';

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[key]) el.innerHTML = T[key][lang];
  });
  const label = lang === 'en' ? '中文' : 'EN';
  document.querySelectorAll('.lang-label').forEach(el => el.textContent = label);
  document.querySelectorAll('.toggle-track').forEach(el => el.classList.toggle('zh', lang === 'zh'));
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  applyLang(currentLang);
}

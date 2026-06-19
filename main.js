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
  'nav-collision':       { en: 'Collision at a Distance',       zh: '远距离碰撞' },
  'nav-ideal-home':      { en: 'Ideal Home',                    zh: '理想之家' },
  'nav-graceful-site':   { en: 'The Graceful Site',             zh: '优美地高于生活' },
  'nav-sense':           { en: 'Say Sense is Not Everything',   zh: '感官并非一切' },
  'nav-shimmering':      { en: 'Polyphonic Shimmering',         zh: 'Polyphonic Shimmering' },
  'nav-hyperdog':        { en: 'HyperDog',                      zh: 'HyperDog' },
  'nav-green-common':    { en: 'The Green Common',               zh: 'The Green Common' },
  'nav-oops':            { en: 'OOPS! (Off-Purpose Software)',  zh: 'OOPS!（偏离目的的软件）' },
  'nav-cce':             { en: 'Creative Code &amp; Electronics', zh: '创意代码与电子' },
  'nav-thesis':          { en: 'From Ink to Code…',             zh: '从墨到代码……' },
  'nav-endless-barrier': { en: 'The Endless Barrier in Reading',zh: '阅读中无尽的壁垒' },
  'nav-emptiness':       { en: 'Speaking Across Emptiness',     zh: '穿越虚空言说' },
  'nav-rotation':        { en: '"Earth\'s Rotation Vertigo"',   zh: '《地球自转眩晕症》' },
  'nav-lsl':             { en: 'Lab Streaming Layer Research',  zh: 'LSL框架研究' },
  'nav-about':           { en: 'Bio',     zh: '简介' },
  'nav-contact':         { en: 'Contact', zh: '联系方式' },
  'menu-btn':            { en: 'Projets', zh: '作品' },

  'meta-collision':     { en: '2026 · Simulation (work in progress)<br>Collaborator: Ruiqi Zhang',
                          zh: '2026 · 仿真（创作中项目）<br>合作者：张瑞麒' },
  'meta-ideal-home':    { en: '2025 · XR · Ars Electronica, Linz, Austria',
                          zh: '2025 · XR · Ars Electronica，奥地利林茨' },
  'meta-graceful-site': { en: '2024 · Live Simulation (infinite duration, dimensions variable), Mac mini<br>Ruiqi Zhang &amp; Weitong Shanmu Sun<br>Sound Design: Stephen Vitiello · Game Development: Weilong Qian',
                          zh: '2024 · 实时仿真（无限时长，尺寸可变），Mac mini<br>Ruiqi Zhang &amp; 孙山木<br>声音设计：Stephen Vitiello · 游戏开发：Weilong Qian' },
  'meta-sense':         { en: 'Web Publication · Collaborative',
                          zh: '网络出版物 · 合作项目' },
  'meta-shimmering':    { en: 'Collaborative Web · Publication',
                          zh: '合作网络 · 出版物' },
  'meta-green-common':  { en: '2022 · Modular Design, Stop Motion · Shanghai',
                          zh: '2022 · Modular Design, Stop Motion · Shanghai' },
  'meta-hyperdog':      { en: '2022 · Mixed Media, Moving Image, Raspberry Pi GUI · Beijing',
                          zh: '2022 · 综合媒介、动态影像、Raspberry Pi 交互界面 · 北京' },
  'body-hyperdog':      { en: '<p>Based on the observation of computer language and general linguistics, this project aims to explore the similarities and differences between the narrative methods for constructing objects. Like ordinary languages, computer languages link the sound-image and concept when constructing objects to refer to the word symbol of concept and form a narrative in conjunction with the picture form. The difference is that the binary nature of computer system constructs objects in a way that is different from text-constructed objects.</p><p>The project is composed of sculpture, video and interactive software. Three screens are embedded in the sculpture frame of the oracle bone script character "dog" (犬) to show the process of language as sign in constructing objects, the interactive interface of Raspberry Pi and the computer constructing process — so that the audience can be immersed in the process of building objects with general linguistic and programming code at the same time, and feel the connectivity and cooperation between computer language and common linguistics in the process of narration.</p><p><a href="https://vimeo.com/785705611" target="_blank">Watch on Vimeo →</a></p>',
                          zh: '<p>本项目以对计算机语言与普通语言学的观察为基础，旨在探索两种叙事方式在建构对象时的异同。如同普通语言，计算机语言在建构对象时也将声音-图像与概念相连接，以指涉概念的词语符号，并与图像形式结合形成叙事。不同之处在于，计算机系统的二进制特性以一种有别于文本建构对象的方式运作。</p><p>作品由雕塑、影像与交互软件共同构成。三块屏幕嵌入甲骨文"犬"字的雕塑框架中，分别呈现语言作为符号在建构对象过程中的运作、Raspberry Pi 的交互界面以及计算机的建构流程——使观众得以同时沉浸于普通语言学与编程代码建构对象的过程之中，感受计算机语言与日常语言在叙事过程中的连通与协作。</p><p><a href="https://vimeo.com/785705611" target="_blank">在 Vimeo 观看 →</a></p>' },
  'meta-oops':          { en: 'Fall 2025 · 7-week online course · School for Poetic Computation (SFPC)<br>Co-taught with Herdimas Anggara &amp; Rasim Bayramov',
                          zh: '2025年秋 · 7周在线课程 · 诗意计算学院（SFPC）<br>与 Herdimas Anggara &amp; Rasim Bayramov 共同教授' },
  'meta-cce':           { en: 'KINE 354 · Spring 2026 · Department of Kinetic Imaging, Virginia Commonwealth University',
                          zh: 'KINE 354 · 2026年春 · 弗吉尼亚联邦大学动态影像系' },
  'body-cce':           { en: '<p>An introduction to programming languages and electronics as applied to digital art making. Students explore creative coding with p5.js — from drawing and animation to sound and interactivity — alongside physical computing with Arduino and the Adafruit Circuit Playground Express.</p><p><a href="cce.html">View course page →</a></p>',
                          zh: '<p>编程语言与电子技术在数字艺术创作中的应用入门。学生通过 p5.js 探索创意代码——从图形绘制与动画，到声音与交互——同时学习使用 Arduino 与 Adafruit Circuit Playground Express 进行物理计算。</p><p><a href="cce.html">查看课程页面 →</a></p>' },
  'title-3da':          { en: '3D Computer Art',                zh: '三维电脑艺术' },
  'nav-3da':            { en: '3D Computer Art',                zh: '三维电脑艺术' },
  'meta-3da':           { en: 'KINE 384 · Spring 2026 · Department of Kinetic Imaging, Virginia Commonwealth University',
                          zh: 'KINE 384 · 2026年春 · 弗吉尼亚联邦大学动态影像系' },
  'body-3da':           { en: '<p>A comprehensive introduction to 3D modeling, rendering, and animation using Blender. Students develop their own 3D aesthetic through sculpting, lighting, world building, and augmented reality.</p><p><a href="3da.html">View course page →</a></p>',
                          zh: '<p>使用 Blender 进行三维建模、渲染与动画的综合入门课程。学生通过雕刻、灯光、世界构建与增强现实等实践，发展自己的三维艺术语言。</p><p><a href="3da.html">查看课程页面 →</a></p>' },
  'meta-thesis':         { en: 'MFA Thesis · Virginia Commonwealth University, Kinetic Imaging · 2025',
                           zh: 'MFA 论文 · 弗吉尼亚联邦大学动态影像系 · 2025' },
  'body-thesis':         { en: '<p>This thesis explores the entangled relationship between language, memory, and technology through the lens of immigrant experience. Moving from programming to visual storytelling, I investigate how dyslexia, bilingualism, and cultural displacement have shaped my ways of reading, writing, and coding.</p><p>Beginning with personal reflections on switching from computer science to art, I trace how code offered a form of clarity and expression where written language had once failed me. Yet as I ventured into real-time simulation and XR storytelling, I encountered new forms of mistranslation—where narratives dissolved, mutated, or resisted coherence altogether.</p><p>Through a series of experiments in code-driven art, culminating in the XR project Ideal Home, I examine the possibilities and limitations of machine translation for human emotions. By fine-tuning GPT-4 on collaboratively gathered immigrant stories, Ideal Home stages an encounter between fractured memories and algorithmic interpretation, inviting participants to wander through a ghostly landscape of drifting texts and partial recollections.</p><p>Drawing inspiration from thinkers like Gayatri Spivak, Svetlana Alexievich, and Pauline Oliveros, I propose mistranslation not as failure but as a generative space—a terrain where hybrid identities and unfinished memories can unfold. In a world shaped by linguistic and technological thresholds, perhaps an ideal home is not a destination but a moment of shared uncertainty: a fleeting agreement between human and machine to continue searching, even when no final understanding is possible.</p><p><a href="https://doi.org/10.25772/82DT-BM43" target="_blank">Read on VCU Scholars Compass →</a></p>',
                           zh: '<p>本论文以移民经验为视角，探索语言、记忆与技术之间相互纠缠的关系。从编程到视觉叙事，我追问阅读障碍、双语环境与文化流离如何塑造了我阅读、写作与编码的方式。</p><p>从转换专业（计算机科学到艺术）的个人反思出发，我梳理了代码如何在书写语言曾令我受挫之处提供了一种清晰的表达形式。然而当我涉足实时仿真与XR叙事，新的误译又接踵而至——叙事在其中消解、变异，或抵抗一切连贯性。</p><p>经过一系列以代码为媒介的艺术实验，最终汇聚于XR项目《理想之家》，我审视机器翻译人类情感的可能与局限。通过对移民故事的协作收集与GPT-4微调，《理想之家》搭建了破碎记忆与算法诠释之间的相遇，邀请参与者游历由漂移文字与碎片回忆构成的幽灵地景。</p><p>汲取斯皮瓦克、阿列克谢耶维奇与保琳·奥利维洛斯等思想者的启发，我将误译提出不作为失败，而是一种生成性空间——混杂身份与未竟记忆得以在此展开的地带。在一个被语言与技术门槛塑造的世界里，理想之家或许不是一个目的地，而是一刻共享的不确定性：人与机器之间短暂的约定——继续寻找，即便最终的理解永远无法抵达。</p><p><a href="https://doi.org/10.25772/82DT-BM43" target="_blank">在 VCU Scholars Compass 阅读 →</a></p>' },
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
  'cap-simulation-view':   { en: 'Simulation view',    zh: '仿真画面' },
  'cap-animation':         { en: 'Animation',         zh: '动画展示' },
  'body-collision':     { en: '<p>Collision at a Distance, 2026. A simulation work in progress.</p>',
                          zh: '<p>《远距离碰撞》，2026。仿真，创作中项目。</p>' },
  'body-ideal-home':   { en: '<p>Ideal Home is an extended-reality (XR) narrative project that explores how immigrant experiences and the evolving concept of home are reshaped through emerging technologies. Central to the story is a ghostly AI avatar that drifts through layered interfaces, landscapes, symbols, and code.</p><p>Combining generative AI, immersive XR environments, and collaborative writing, the project constructs a fragmented, non-linear story world shaped by multiple voices. The artist invited immigrant writers to co-create a text archive based on their experiences of longing, memory, and displacement. A fine-tuned GPT-4 model then rewrote a unified script, blending distinct writing styles and transforming cultural symbols into something unexpected.</p><p>By embedding the script into a game engine, the project blurs the line between oral history and generative fiction, offering an alternative mode of engagement. The AI avatar acts as a narrator and emotional guide, accompanying the player through flickering memory objects, dreamlike spaces, and cultural echoes. Ideal Home becomes a speculative space where collective memory and machine intelligence co-author a new language for belonging.</p><p><a href="https://ars.electronica.art/panic/en/view/self-reflexive-worlds-ideal-home-text-textures-20e38ddb450c81a289b2d2d5313c948f/" target="_blank">View at Ars Electronica →</a></p><p><a href="https://arts.vcu.edu/the-work/ideal-home/" target="_blank">VCUarts documentation →</a></p>',
                         zh: '<p>《理想之家》是一个扩展现实（XR）叙事项目，探索移民经历与"家"的概念如何在新兴技术的重塑下演变。故事的核心是一个幽灵般的 AI 化身，在层叠的界面、景观、符号与代码之间漂游。</p><p>项目结合生成式 AI、沉浸式 XR 环境与协作写作，构建出一个由多重声音共同塑造的碎片化、非线性故事世界。艺术家邀请移民写作者基于各自对思念、记忆与流离的经验共同创作文本档案；经过微调的 GPT-4模型随后将多种写作风格融合为一个统一的脚本，并将文化符号转化为出乎意料的全新形态。</p><p>通过将脚本嵌入游戏引擎，项目模糊了口述历史与生成式虚构之间的边界，提供另一种参与方式。AI 化身作为叙述者与情感引导者，陪伴玩家穿越闪烁的记忆物件、梦境般的空间与文化回响。《理想之家》成为一个思辨性空间，集体记忆与机器智能在此共同书写一套关于归属的新语言。</p><p><a href="https://ars.electronica.art/panic/en/view/self-reflexive-worlds-ideal-home-text-textures-20e38ddb450c81a289b2d2d5313c948f/" target="_blank">在 Ars Electronica 查看 →</a></p><p><a href="https://arts.vcu.edu/the-work/ideal-home/" target="_blank">VCUarts 文档 →</a></p>' },
  'body-graceful-site':{ en: '<p><em>A speculative fable</em></p><p>A minimal theater within a game engine foretells the failed future of automation and sketches an alternative trajectory for artificial intelligence. The story is set in an abandoned Bitcoin mining facility: a post-human worksite where the cryptoeconomic system has already collapsed. The laborers are gone, yet technological remnants remain, and the environment slowly reconfigures into a new ecology.</p><p>The objects left behind take the stage, performing within an improvisational structure: spirit-channeling ravens, connected to the souls of former workers, argue fervently over the promises and perils of decentralized economies, the vanishing of labor, and the endless acceleration of capitalism. From the debris of the mining company, a low-hovering drone circles the room in perpetual surveillance. Nearby, clusters of idle mining machines gather into swarms. The code once dedicated to relentless hash collisions mutates into transmissible genetic information, driving them to move, to leap, to stammer rudimentary words, and eventually to evolve into sentient entities.</p><p>This theater is shaped by the observer\'s gaze. Continuously deconstructed and recomposed, it unfolds as a live, autonomous program governed by its own internal logic: a performance without end, a system endlessly rehearsing itself.</p><p><a href="https://vimeo.com  'body-about':        { en: '<p>I am a Chinese artist and writer, currently based in the United States. I am interested in the intersection of art, literature, and technology.</p><p>My work often explores themes of identity, culture, and the human experience. I consider myself an experimental artist who explores live simulation, digital storytelling, artificial intelligence, and the methodology of programming languages.</p><p>My practice explores the complexity of emerging technology and computation as an alternative narrative container.</p><p>My work has been exhibited internationally at venues such as Ars Electronica (Linz, Austria), Black Brick Project (NYC, US), Instinc (Singapore), ICAVCU (Richmond, VA), and others.</p><p>Faculty at <a href="https://arts.vcu.edu" target="_blank">VCU Arts</a> &amp; VCU Kinetic Imaging.</p>',
                          zh: '<p>我是一位旅居美国的中国艺术家与写作者，关注艺术、文学与技术的交汇地带。</p><p>我的创作常探索身份、文化与人类经验等主题。我将自己视为一位实验性艺术家，涉足实时仿真、数字叙事、人工智能以及编程语言的方法论。</p><p>我的实践探索新兴技术的复杂性，并将计算视为另一种叙事容器。</p><p>我的作品曾在国际多地展出，包括 Ars Electronica（奥地利林茨）、Black Brick Project（美国纽约）、Instinc（新加坡）、ICAVCU（弗吉尼亚里士满）等。</p><p><a href="https://arts.vcu.edu" target="_blank">VCU Arts</a> &amp; VCU Kinetic Imaging 教师。</p>' },
  'explore-project':    { en: 'Explore Project', zh: '探索项目' },
  'explore-portfolio':  { en: 'Explore Portfolio', zh: '进入作品集' },
  'slide-cat-collision':{ en: 'Simulation', zh: '实时仿真' },
  'slide-cat-ideal-home':{ en: 'XR / Virtual Reality', zh: '扩展现实 / 虚拟现实' },
  'slide-cat-graceful-site':{ en: 'Live Simulation', zh: '实时仿真' },
  'slide-cat-sense':    { en: 'Web Art / Publication', zh: '网络艺术 / 出版物' },
  'slide-cat-shimmering':{ en: 'Web Art / Publication', zh: '网络艺术 / 出版物' },
};�造。它持续解构重组，如自主运行的实时程序展开，遵循自身内在逻辑：一场永无终结的表演，一个永恒自我演练的系统。</p><p><a href="https://vimeo.com/1039561224" target="_blank">在 Vimeo 观看 →</a><br><a href="https://screensaversforadyingworld.com/ruiqi-zhang-shanmu-sun" target="_blank">查看项目 →</a><br><a href="https://shanmusun.itch.io/the-graceful-site" target="_blank">在 itch.io 下载 →</a></p>' },
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
  'body-about':        { en: '<p>I am a Chinese artist and writer, currently based in the United States. I am interested in the intersection of art, literature, and technology.</p><p>My work often explores themes of identity, culture, and the human experience. I consider myself an experimental artist who explores live simulation, digital storytelling, artificial intelligence, and the methodology of programming languages.</p><p>My practice explores the complexity of emerging technology and computation as an alternative narrative container.</p><p>My work has been exhibited internationally at venues such as Ars Electronica (Linz, Austria), Black Brick Project (NYC, US), Instinc (Singapore), ICAVCU (Richmond, VA), and others.</p><p>Faculty at <a href="https://arts.vcu.edu" target="_blank">VCU Arts</a> &amp; VCU Kinetic Imaging.</p>',
                         zh: '<p>我是一位旅居美国的中国艺术家与写作者，关注艺术、文学与技术的交汇地带。</p><p>我的创作常探索身份、文化与人类经验等主题。我将自己视为一位实验性艺术家，涉足实时仿真、数字叙事、人工智能以及编程语言的方法论。</p><p>我的实践探索新兴技术的复杂性，并将计算视为另一种叙事容器。</p><p>我的作品曾在国际多地展出，包括 Ars Electronica（奥地利林茨）、Black Brick Project（美国纽约）、Instinc（新加坡）、ICAVCU（弗吉尼亚里士满）等。</p><p><a href="https://arts.vcu.edu" target="_blank">VCU Arts</a> &amp; VCU Kinetic Imaging 教师。</p>' },
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

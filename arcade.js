'use strict';
// Project content lives here; add a cabinet by adding another entry.
const projects = [
  { id: 'orderbook', featured: true, title: 'Low-Latency Order Book Simulation', marquee: 'ORDER BOOK', category: 'systems', type: 'C++ / LOW-LATENCY SYSTEMS', color: '#20e3ad', cabinet: '#15463c', dark: '#0c2925', symbol: '↗', art: 'orderbook', image: 'images/arcade/orderbook.svg', tags: 'C++ · GTEST · MAKE', description: 'A low-latency C++ order book with price-time priority matching and lock-free hot paths. Cache-optimized price levels, order queues, and fixed-size memory pools eliminate dynamic allocations on the hot path.', highlights: ['Sub-microsecond operations', '2.6× throughput improvement', 'No hot-path dynamic allocations'], url: 'https://github.com/jjustin-k/OrderBookSim' },
  { id: 'tandem', featured: true, title: 'Tandem — LLM Routing & KV-Cache Inference', marquee: 'TANDEM', category: 'vision', type: 'LLM ROUTING / INFERENCE', color: '#18d5ed', cabinet: '#133f50', dark: '#0c2433', symbol: '⇄', art: 'tandem', image: 'images/arcade/tandem.svg', tags: 'PYTHON · PYTORCH · TRANSFORMERS', description: 'A modular LLM inference pipeline that routes requests by task and complexity, with pluggable classifiers and explicit KV-cache handoff interfaces. In a Qwen2.5-0.5B benchmark using 1,024-token prefixes, disk-restored KV-cache reuse reduced median first-token latency from 1,642 ms to 132 ms.', highlights: ['12.45× faster median first token in the benchmark', '1,642 ms → 132 ms on Qwen2.5-0.5B', 'Identical generated tokens across nine test cases'], url: 'https://github.com/tandemkv/Tandem' },
  { id: 'compiler', featured: true, title: 'Lite AI Compiler', marquee: 'LITE AI COMPILER', category: 'systems', type: 'ML COMPILER / CODE GENERATION', color: '#f044a0', cabinet: '#4a1b44', dark: '#2b102d', symbol: '</>', art: 'compiler', image: 'images/arcade/compiler.svg', tags: 'C++ · C · PYTHON', description: 'An end-to-end ML compiler that translates neural-network computation graphs into executable C through a custom intermediate representation. Implements shape inference, dependency analysis, graph optimization, IR lowering, and C code generation for MatMul, Conv2D, ReLU, and MaxPool.', highlights: ['98.9% MNIST accuracy', '369 µs average generated C inference time over 10,000 runs', 'Neural-network graphs → custom IR → executable C'], url: 'https://github.com/jjustin-k/ai_compiler' },
  { id: 'pdf', title: 'PDF Reader', marquee: 'TEXT QUEST', category: 'vision', type: 'COMPUTER VISION / OCR', color: '#20e3ad', cabinet: '#15463c', dark: '#0c2925', symbol: 'Aa', art: 'text', image: 'images/cnn.png', tags: 'PYTHON · OPENCV · CONVOLUTIONAL NEURAL NETWORK', description: 'Finding the signal in a page full of pixels. This program locates and reads text across multiple PDFs with different formats, using Python and OpenCV for image processing and a trained convolutional neural network to locate text and identify characters.', url: null },
  { id: 'drone', title: 'Drone Rescue', marquee: 'RESCUE MISSION', category: 'algorithms', type: 'AUTONOMOUS EXPLORATION', color: '#18d5ed', cabinet: '#133f50', dark: '#0c2433', symbol: '+', art: 'drone', image: 'images/drone.png', tags: 'PATHFINDING · SIMULATION · TEAM PROJECT', description: 'An island, a virtual drone, and a rescue mission. Built for a Software Development course, this program controls a virtual drone to locate a remote island and identify safe entry points for rescue teams.', url: 'https://github.com/2AA4-W24/a2-rescue-mission-team-205' },
  { id: 'maze', title: 'Maze Runner', marquee: 'MAZE RUNNER', category: 'algorithms', type: 'PATHFINDING / ALGORITHMS', color: '#f044a0', cabinet: '#4a1b44', dark: '#2b102d', symbol: '↳', art: 'maze', image: 'images/maze.jpg', tags: 'RIGHT-HAND ALGORITHM · DIJKSTRA’S ALGORITHM', description: 'There’s always a way through. A maze-solving program that started with the right-hand algorithm. An updated version improved the code quality and introduced Dijkstra’s algorithm to find a path through the maze.', url: 'https://github.com/jjustin-k/a1-maze-runner-jjustin-k' },
  { id: 'face', title: 'Facial Recognition', marquee: 'FACE DETECT', category: 'vision', type: 'COMPUTER VISION / RECOGNITION', color: '#37c5ff', cabinet: '#284352', dark: '#192d38', symbol: '[ ]', art: 'face', image: 'images/face.jpg', tags: 'COMPUTER VISION · FACE RECOGNITION', description: 'Putting a name to a familiar face. This program recognizes people from a collection of known photos, with an option to add an unrecognized person to the collection as someone new.', url: 'https://github.com/jjustin-k/Facial-Recognition/tree/main' },
  { id: 'gesture', title: 'Hand-Gesture Recognizer', marquee: 'SIGN LANGUAGE', category: 'vision', type: 'COMPUTER VISION / DELTAHACKS', color: '#e774ff', cabinet: '#54313a', dark: '#341f26', symbol: '✦', art: 'hand', image: 'images/Thumbs up.jpg', tags: 'GESTURE RECOGNITION · DELTAHACKS 2024', description: 'From movement to meaning. Built at DeltaHacks 2024, this project recognizes certain hand gestures and translates them into letters of the alphabet.', url: 'https://github.com/jjustin-k/DeltaHacks-2024' },
  { id: 'password', title: 'Password Resilience Analyzer', marquee: 'PASSWORD POWER', category: 'algorithms', type: 'SECURITY / ALGORITHMS', color: '#ad8cff', cabinet: '#42482b', dark: '#2a2f1c', symbol: '***', art: 'lock', image: 'images/password.jpg', tags: 'PASSWORD STRENGTH · SECURITY', description: 'How strong is your next line of defense? An algorithm that analyzes a given password to determine its strength.', url: 'https://github.com/jjustin-k/Password-Resilience-Analyzer/tree/main' }
];
const grid = document.querySelector('#machines');
projects.forEach((project, index) => {
  const button = document.createElement('button');
  button.className = 'machine';
  button.dataset.category = project.category;
  button.dataset.featured = String(Boolean(project.featured));
  button.hidden = !project.featured;
  button.style.setProperty('--accent', project.color);
  button.style.setProperty('--cabinet', project.cabinet);
  button.style.setProperty('--dark', project.dark);
  button.setAttribute('aria-label', `Explore ${project.title}`);
  button.setAttribute('aria-haspopup', 'dialog');
  button.innerHTML = `<div class="machine-stage" aria-hidden="true"><span class="machine-number">CABINET / 0${index + 1}</span><div class="cabinet"><div class="marquee"><span>★</span>${project.marquee}<span>★</span></div><div class="monitor-housing"><div class="monitor"><img src="images/arcade/${project.art}.svg" alt=""><span class="screen-caption">PRESS START TO EXPLORE</span></div></div><div class="control-panel"><span class="joystick"></span><i></i><i></i><i></i></div><div class="cabinet-base"><span class="base-symbol">${project.symbol}</span><span class="coin-slot">01</span></div></div></div><div class="machine-info"><div><h3>${project.title}</h3><p>${project.type}</p></div><span class="project-arrow" aria-hidden="true">↗</span></div>`;
  button.addEventListener('click', () => openProject(project, index));
  grid.append(button);
});
const dialog = document.querySelector('#project-dialog');
let lastMachine;
function openProject(project, index) {
  lastMachine = document.activeElement;
  playSound();
  const content = document.querySelector('#dialog-content');
  content.replaceChildren();
  const kicker = document.createElement('p');
  kicker.className = 'dialog-kicker';
  kicker.textContent = `CABINET 0${index + 1} / ${project.type}`;
  const title = document.createElement('h2');
  title.id = 'dialog-title';
  title.className = 'dialog-title';
  title.textContent = project.title;
  const desc = document.createElement('p');
  desc.className = 'dialog-description';
  desc.textContent = project.description;
  const tags = document.createElement('p');
  tags.className = 'dialog-tags';
  tags.textContent = project.tags;
  content.append(kicker, title, desc, tags);
  if (project.highlights) {
    const highlights = document.createElement('ul');
    highlights.className = 'dialog-highlights';
    project.highlights.forEach(highlight => {
      const item = document.createElement('li');
      item.textContent = highlight;
      highlights.append(item);
    });
    content.append(highlights);
  }
  const image = document.createElement('img');
  image.className = 'dialog-image';
  image.src = project.image;
  image.alt = `${project.title} project illustration`;
  content.append(image);
  if (!project.url) {
    const note = document.createElement('p');
    note.className = 'dialog-note';
    note.textContent = 'A source repository isn’t linked for this project. Get in touch if you’d like to hear more.';
    content.append(note);
  }
  const link = document.createElement('a');
  link.className = 'dialog-link';
  link.href = project.url || 'mailto:jjkwinecki@gmail.com?subject=PDF%20Reader%20project';
  link.textContent = project.url ? 'VIEW SOURCE ON GITHUB ↗' : 'ASK ABOUT THIS PROJECT ↗';
  if (project.url) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  content.append(link);
  dialog.showModal();
}
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => lastMachine?.focus());
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  let visible = 0;
  grid.querySelectorAll('.machine').forEach(machine => {
    const filter = button.dataset.filter;
    machine.hidden = filter === 'featured' ? machine.dataset.featured !== 'true' : filter !== 'all' && filter !== machine.dataset.category;
    if (!machine.hidden) visible++;
  });
  document.querySelector('#machine-count').textContent = `${visible} MACHINES ONLINE`;
  playSound();
}));
let soundOn = false;
let audioContext;
const soundButton = document.querySelector('#sound');
soundButton.addEventListener('click', () => {
  soundOn = !soundOn;
  soundButton.setAttribute('aria-pressed', String(soundOn));
  soundButton.setAttribute('aria-label', soundOn ? 'Disable arcade sounds' : 'Enable arcade sounds');
  soundButton.querySelector('span').textContent = soundOn ? 'SOUND ON' : 'SOUND OFF';
  playSound();
});
function playSound() {
  if (!soundOn) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    const now = audioContext.currentTime;
    [523.25, 783.99].forEach((frequency, i) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = 'square';
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.025, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.09);
      oscillator.connect(gain); gain.connect(audioContext.destination);
      oscillator.start(now + i * 0.07); oscillator.stop(now + i * 0.07 + 0.1);
    });
  } catch { /* Sound is optional when Web Audio is unavailable. */ }
}
document.querySelector('#year').textContent = new Date().getFullYear();

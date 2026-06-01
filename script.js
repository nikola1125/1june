/* ============================================================
   ✏️  PERSONALIZE HERE — edit the CONFIG object below
   ============================================================ */
const CONFIG = {
  herName: "My Love",
  tagline: "You're still my favorite kid",
  yourSign: "— Forever yours",
  letter: `On this Children's Day, I want you to know something simple and true: the world got infinitely brighter the day you walked into my life.

You carry wonder in the way you laugh, courage in the way you care, and magic in the smallest things you do. You make ordinary days feel like adventures and hard days feel survivable — because you're there.

Never stop being wonderfully, beautifully you. I'll always be here to hold your hand, share your snacks, and chase every dream with you.

Happy Children's Day, my favorite person in the entire universe.`,

  reasons: [
    { emoji: "🌸", title: "Your laugh", text: "It's the sound that turns any bad day into something worth smiling about." },
    { emoji: "🦋", title: "Your heart", text: "The kindest, warmest, most genuine heart I've ever known." },
    { emoji: "✨", title: "Your spark", text: "You make everything more fun — even doing absolutely nothing together." },
    { emoji: "🌙", title: "Your calm", text: "With you, I feel safe, seen, and completely at home." },
    { emoji: "🎨", title: "Your dreams", text: "I believe in every single one of them — and in you, always." },
  ],

  memories: [
    { date: "The beginning", title: "When we first met", desc: "I didn't know it yet, but my whole story was about to change for the better." },
    { date: "A favorite moment", title: "That time we couldn't stop laughing", desc: "Remember? The kind of laugh that makes your stomach hurt and your eyes water. I live for those moments with you." },
    { date: "Every day since", title: "Us, right now", desc: "Every chapter with you is my favorite. And I'm so excited for all the ones we haven't written yet." },
  ],

  heartWords: ["Adored", "Beautiful", "Brave", "Cherished", "Dreamy", "Extraordinary", "Funny", "Gorgeous", "Happy", "Irreplaceable", "Joyful", "Kind", "Loved", "Magical", "Needed", "Perfect", "Queen", "Radiant", "Special", "Treasured"],

  gallery: [
    { src: "photos/memory-01.png", caption: "My favourite passenger", rotate: -2 },
    { src: "photos/memory-02.png", caption: "That laugh I'll never forget", rotate: 3 },
    { src: "photos/memory-03.png", caption: "Road trip vibes with you", rotate: -3 },
    { src: "photos/memory-04.png", caption: "My favourite view", rotate: 2 },
    { src: "photos/memory-05.png", caption: "You, glowing", rotate: -1 },
    { src: "photos/memory-06.png", caption: "My favourite kid 🎀", rotate: 4 },
    { src: "photos/memory-07.png", caption: "Only you make me laugh like this", rotate: -4 },
    { src: "photos/memory-08.png", caption: "Quiet moments like this", rotate: 2 },
    { src: "photos/memory-09.png", caption: "We made a heart", rotate: -2 },
    { src: "photos/memory-10.png", caption: "Shopping dates with you", rotate: 3 },
    { src: "photos/memory-11.png", caption: "Movie-scene kind of love", rotate: -3 },
    { src: "photos/memory-12.png", caption: "Our little adventures", rotate: 1 },
    { src: "photos/memory-13.png", caption: "Never too serious with you", rotate: -2 },
    { src: "photos/memory-14.png", caption: "Your silly side is my favourite", rotate: 3 },
    { src: "photos/memory-15.png", caption: "Late night calls with you", rotate: -1 },
    { src: "photos/memory-16.png", caption: "Sunshine and you", rotate: 2 },
  ],

  finaleTitle: "You're my today,<br/>my tomorrow,<br/>and every adventure.",
  finaleSub: "You're still my favorite kid — today and always.",
  modalTitle: "I love you",
  modalText: "More than all the stars, all the balloons, and every silly little dream we haven't dreamed yet. You are my greatest gift.",

  // Alban Skenderaj — VASHA (add the MP3 file to audio/ — see audio/README.md)
  musicSrc: "audio/alban-skenderaj-vasha.mp3",
  musicVolume: 0.35,
};

/* ============================================================ */

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mobileQuery = window.matchMedia("(max-width: 768px)");
const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

function isMobileLayout() {
  return mobileQuery.matches;
}

function isTouchDevice() {
  return coarsePointerQuery.matches || isMobileLayout();
}

function applyLayoutMode() {
  document.documentElement.classList.toggle("is-mobile", isMobileLayout());
  const film = document.getElementById("galleryFilm");
  if (film) {
    film.classList.toggle("is-static", isMobileLayout());
  }
  const swipeHint = document.getElementById("lightboxSwipeHint");
  if (swipeHint) swipeHint.hidden = !isTouchDevice();
}

applyLayoutMode();
mobileQuery.addEventListener("change", applyLayoutMode);
coarsePointerQuery.addEventListener("change", applyLayoutMode);

/* --- Apply config --- */
document.getElementById("heroName").textContent = CONFIG.herName;
document.getElementById("heroTagline").textContent = CONFIG.tagline;
document.getElementById("letterSign").textContent = CONFIG.yourSign;
document.getElementById("finaleTitle").innerHTML = CONFIG.finaleTitle;
document.getElementById("finaleSub").textContent = CONFIG.finaleSub;
document.getElementById("modalTitle").textContent = CONFIG.modalTitle;
document.getElementById("modalText").textContent = CONFIG.modalText;

/* --- Loader --- */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    initHeroAnimations();
  }, 2200);
});

/* --- Particle canvas --- */
function initParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  const count = prefersReducedMotion ? 20 : isMobileLayout() ? 28 : 60;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.4 + 0.1,
      hue: Math.random() > 0.5 ? 340 : 210,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${p.alpha})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
    });
    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }
  draw();
}

/* --- Sky floating decor --- */
function initSkyDecor() {
  const container = document.getElementById("skyDecor");
  const items = ["⭐", "🌟", "💫", "🎈", "🦋", "☁️", "🌸", "💛"];
  const count = prefersReducedMotion ? 6 : isMobileLayout() ? 8 : 14;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "float-item";
    el.textContent = items[i % items.length];
    el.style.left = `${Math.random() * 100}%`;
    el.style.animationDuration = `${15 + Math.random() * 20}s`;
    el.style.animationDelay = `${Math.random() * 15}s`;
    el.style.fontSize = `${1 + Math.random() * 1.5}rem`;
    container.appendChild(el);
  }
}

/* --- Cursor glow --- */
function initCursorGlow() {
  if (prefersReducedMotion || isTouchDevice()) return;
  const glow = document.querySelector(".cursor-glow");
  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  function animate() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    glow.style.left = cx + "px";
    glow.style.top = cy + "px";
    requestAnimationFrame(animate);
  }
  animate();
}

/* --- Hero animations --- */
function initHeroAnimations() {
  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }

  gsap.to(".hero-date", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
  gsap.to(".hero-title .line:nth-child(1)", { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });
  gsap.to(".hero-title .name", { opacity: 1, y: 0, duration: 0.8, delay: 0.45, ease: "power3.out" });
  gsap.to(".hero-tagline", { opacity: 1, y: 0, duration: 0.8, delay: 0.65, ease: "power3.out" });
  gsap.to(".cta-btn", { opacity: 1, y: 0, duration: 0.8, delay: 0.85, ease: "power3.out" });

  gsap.to(".balloon", {
    y: -20,
    rotation: "random(-10, 10)",
    duration: "random(2, 4)",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.3,
  });
}

/* --- Scroll reveals --- */
function initScrollReveals() {
  if (prefersReducedMotion) return;

  gsap.utils.toArray(".reveal").forEach((el) => {
    if (el.closest(".hero")) return;
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  });

  gsap.utils.toArray(".reason-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 90%" },
      opacity: 0,
      y: 50,
      rotation: i % 2 === 0 ? -3 : 3,
      duration: 0.7,
      delay: i * 0.1,
      ease: "back.out(1.4)",
    });
  });

  gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: "top 88%" },
      opacity: 0,
      x: -40,
      duration: 0.7,
      delay: i * 0.15,
      ease: "power3.out",
    });
  });

  gsap.utils.toArray(".polaroid").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 92%" },
      opacity: 0,
      y: 60,
      rotation: (i % 2 === 0 ? -8 : 8),
      duration: 0.8,
      delay: (i % 4) * 0.08,
      ease: "back.out(1.4)",
    });
  });
}

/* --- Build reasons --- */
function buildReasons() {
  const grid = document.getElementById("reasonsGrid");
  CONFIG.reasons.forEach((r) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.innerHTML = `
      <span class="reason-emoji">${r.emoji}</span>
      <h3 class="reason-title">${r.title}</h3>
      <p class="reason-text">${r.text}</p>
    `;
    grid.appendChild(card);
  });
}

/* --- Build gallery --- */
function buildGallery() {
  const grid = document.getElementById("galleryGrid");
  const film = document.getElementById("galleryFilm");

  CONFIG.gallery.forEach((photo, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "polaroid";
    card.style.setProperty("--rotate", `${photo.rotate}deg`);
    card.dataset.index = i;
    card.innerHTML = `
      <span class="polaroid-tape" aria-hidden="true"></span>
      <span class="polaroid-img-wrap">
        <img src="${photo.src}" alt="${photo.caption}" loading="lazy" />
      </span>
      <span class="polaroid-caption">${photo.caption}</span>
    `;
    grid.appendChild(card);
  });

  // Film strip — duplicate for seamless loop
  const filmInner = document.createElement("div");
  filmInner.className = "gallery-film-track";
  const filmPhotos = [...CONFIG.gallery, ...CONFIG.gallery];
  filmPhotos.forEach((photo) => {
    const thumb = document.createElement("div");
    thumb.className = "film-frame";
    thumb.innerHTML = `<img src="${photo.src}" alt="" loading="lazy" />`;
    filmInner.appendChild(thumb);
  });
  film.appendChild(filmInner);
  applyLayoutMode();
}

function initGallery() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  let currentIndex = 0;
  let blockLightboxClose = false;

  function openLightbox(index) {
    currentIndex = index;
    const photo = CONFIG.gallery[index];
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.caption;
    lightboxCaption.textContent = photo.caption;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";

    blockLightboxClose = true;
    setTimeout(() => { blockLightboxClose = false; }, 400);

    if (!prefersReducedMotion) {
      gsap.fromTo(lightboxImg,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" }
      );
    }
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length;
    openLightbox(currentIndex);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % CONFIG.gallery.length;
    openLightbox(currentIndex);
  }

  document.getElementById("galleryGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".polaroid");
    if (!card) return;
    openLightbox(Number(card.dataset.index));
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });
  nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });

  lightbox.addEventListener("click", (e) => {
    if (blockLightboxClose) return;
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  });

  let touchStartX = 0;
  let touchStartY = 0;

  lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) showPrev();
    else showNext();
  }, { passive: true });

  // Subtle hover tilt on polaroids
  if (!prefersReducedMotion && !isTouchDevice()) {
    document.querySelectorAll(".polaroid").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `rotate(0deg) scale(1.04) perspective(400px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }
}

/* --- Build timeline --- */
function buildTimeline() {
  const timeline = document.getElementById("timeline");
  CONFIG.memories.forEach((m) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <p class="timeline-date">${m.date}</p>
      <h3 class="timeline-title">${m.title}</h3>
      <p class="timeline-desc">${m.desc}</p>
    `;
    timeline.appendChild(item);
  });
}

/* --- Typewriter letter --- */
function typewriter(element, text, speed = 28) {
  let i = 0;
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

/* --- Envelope --- */
function initEnvelope() {
  const envelope = document.getElementById("envelope");
  const hint = document.getElementById("envelopeHint");
  const letterText = document.getElementById("letterText");
  let opened = false;

  const openEnvelope = () => {
    if (opened) return;
    opened = true;
    envelope.classList.add("open");
    hint.classList.add("hidden");

    setTimeout(() => typewriter(letterText, CONFIG.letter, 22), 600);

    if (!prefersReducedMotion) {
      burstMiniConfetti(envelope.getBoundingClientRect());
    }
  };

  envelope.addEventListener("click", openEnvelope);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEnvelope();
    }
  });
  envelope.setAttribute("tabindex", "0");
  envelope.setAttribute("role", "button");
  envelope.setAttribute("aria-label", "Open letter envelope");
}

/* --- Hearts game --- */
function initHeartsGame() {
  const arena = document.getElementById("heartsArena");
  const message = document.getElementById("heartsMessage");
  const collected = document.getElementById("collectedWords");
  const words = [...CONFIG.heartWords].sort(() => Math.random() - 0.5).slice(0, 12);
  let popped = 0;

  words.forEach((word, i) => {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "💗";
    const cols = isMobileLayout() ? 3 : 4;
    const colWidth = isMobileLayout() ? 28 : 22;
    heart.style.left = `${6 + (i % cols) * colWidth + Math.random() * 6}%`;
    heart.style.top = `${10 + Math.floor(i / cols) * (isMobileLayout() ? 24 : 28) + Math.random() * 8}%`;
    heart.style.animationDelay = `${Math.random() * 2}s`;
    heart.style.animationDuration = `${3 + Math.random() * 2}s`;

    heart.addEventListener("click", () => {
      if (heart.classList.contains("popped")) return;
      heart.classList.add("popped");
      message.textContent = word;

      const chip = document.createElement("span");
      chip.className = "word-chip";
      chip.textContent = word;
      collected.appendChild(chip);

      popped++;
      if (popped === words.length) {
        setTimeout(() => {
          message.textContent = "You collected all my love! 💕";
          if (!prefersReducedMotion) burstMiniConfetti(arena.getBoundingClientRect());
        }, 400);
      }
    });

    arena.appendChild(heart);
  });
}

/* --- Confetti --- */
function burstMiniConfetti(rect) {
  const colors = ["#ff8fab", "#ffd166", "#cdb4db", "#a2d2ff", "#fb6f92"];
  for (let i = 0; i < 30; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = rect.left + Math.random() * rect.width + "px";
    piece.style.top = rect.top + Math.random() * (rect.height / 2) + "px";
    piece.style.background = colors[i % colors.length];
    piece.style.position = "fixed";
    piece.style.zIndex = "9999";
    piece.style.animationDuration = 1.5 + Math.random() + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3000);
  }
}

function burstModalConfetti() {
  const container = document.getElementById("modalConfetti");
  const colors = ["#ff8fab", "#ffd166", "#cdb4db", "#a2d2ff", "#fb6f92", "#bde0fe"];
  container.innerHTML = "";
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.top = "-10px";
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = Math.random() * 0.8 + "s";
    piece.style.width = 6 + Math.random() * 8 + "px";
    piece.style.height = piece.style.width;
    container.appendChild(piece);
  }
}

/* --- Modal --- */
function initModal() {
  const overlay = document.getElementById("modalOverlay");
  const modal = overlay.querySelector(".modal");
  const surpriseBtn = document.getElementById("surpriseBtn");
  const closeBtn = document.getElementById("modalClose");
  let blockOverlayClose = false;

  function openModal() {
    overlay.hidden = false;
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    burstModalConfetti();

    // Same tap/click was hitting the overlay and closing instantly
    blockOverlayClose = true;
    setTimeout(() => { blockOverlayClose = false; }, 500);
  }

  function closeModal() {
    overlay.hidden = true;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  surpriseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openModal();
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal();
  });

  modal.addEventListener("click", (e) => e.stopPropagation());

  overlay.addEventListener("click", (e) => {
    if (blockOverlayClose) return;
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });
}

/* --- Start button scroll --- */
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("letter").scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
});

/* --- Background music (MP3 loop + built-in ambient fallback) --- */
function initMusic() {
  const btn = document.getElementById("musicBtn");
  const icon = document.getElementById("musicIcon");
  const audio = document.getElementById("bgMusic");
  let playing = false;
  let unlocked = false;
  let useFallback = false;
  let audioCtx = null;
  let fallbackNodes = null;
  let melodyTimer = null;

  audio.volume = CONFIG.musicVolume;
  if (CONFIG.musicSrc) {
    audio.src = CONFIG.musicSrc;
  }

  function setUiState(isPlaying) {
    playing = isPlaying;
    btn.classList.toggle("playing", isPlaying);
    btn.classList.toggle("muted", !isPlaying);
    icon.textContent = isPlaying ? "🎵" : "🔇";
    btn.title = isPlaying ? "Music on — tap to pause" : "Music off — tap to play";
    btn.setAttribute("aria-label", isPlaying ? "Pause background music" : "Play background music");
  }

  function startFallbackLoop() {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (fallbackNodes) return;

    const master = audioCtx.createGain();
    master.gain.value = CONFIG.musicVolume * 0.85;
    master.connect(audioCtx.destination);

    const padNotes = [261.63, 329.63, 392, 523.25];
    const padOscs = padNotes.map((freq) => {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      g.gain.value = 0.018;
      osc.connect(g);
      g.connect(master);
      osc.start();
      return osc;
    });

    const melody = [523.25, 587.33, 659.25, 783.99, 880, 783.99, 659.25, 587.33, 523.25, 440, 493.88, 523.25];
    const noteLen = 0.55;
    let melodyStep = 0;

    function playNote() {
      const freq = melody[melodyStep % melody.length];
      melodyStep += 1;
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      const t = audioCtx.currentTime;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.07, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, t + noteLen);
      osc.connect(g);
      g.connect(master);
      osc.start(t);
      osc.stop(t + noteLen + 0.05);
    }

    melodyTimer = setInterval(playNote, noteLen * 1000);
    playNote();
    fallbackNodes = { master, padOscs, melodyTimer };
  }

  function stopFallbackLoop() {
    if (!fallbackNodes) return;
    clearInterval(fallbackNodes.melodyTimer);
    fallbackNodes.padOscs.forEach((o) => {
      try { o.stop(); } catch (_) { /* already stopped */ }
    });
    fallbackNodes.master.disconnect();
    fallbackNodes = null;
    melodyTimer = null;
  }

  async function startMusic() {
    if (playing) return;
    unlocked = true;

    if (!useFallback && CONFIG.musicSrc) {
      try {
        if (audio.paused) await audio.play();
        setUiState(true);
        return;
      } catch (_) {
        useFallback = true;
      }
    } else {
      useFallback = true;
    }

    startFallbackLoop();
    if (audioCtx?.state === "suspended") await audioCtx.resume();
    setUiState(true);
  }

  function pauseMusic() {
    if (!playing) return;
    if (!useFallback && audio.src) {
      audio.pause();
    } else {
      stopFallbackLoop();
      if (audioCtx?.state === "running") audioCtx.suspend();
    }
    setUiState(false);
  }

  function toggleMusic() {
    if (playing) pauseMusic();
    else startMusic();
  }

  audio.addEventListener("error", () => {
    useFallback = true;
    if (playing && !fallbackNodes) {
      audio.pause();
      startFallbackLoop();
    }
  });

  audio.addEventListener("ended", () => {
    if (!audio.loop) audio.currentTime = 0;
    if (playing && !audio.paused) audio.play().catch(() => {});
  });

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    unlocked = true;
    toggleMusic();
  });

  function unlockOnInteraction() {
    if (unlocked) return;
    unlocked = true;
    startMusic();
  }

  document.addEventListener("click", unlockOnInteraction, { once: true });
  document.addEventListener("touchstart", unlockOnInteraction, { once: true, passive: true });

  window.addEventListener("load", () => {
    if (!CONFIG.musicSrc) useFallback = true;
  });

  setUiState(false);
}

/* --- Init all --- */
initParticles();
initSkyDecor();
initCursorGlow();
buildReasons();
buildTimeline();
buildGallery();
initGallery();
initEnvelope();
initHeartsGame();
initModal();
initMusic();

// Scroll reveals after DOM built
requestAnimationFrame(() => {
  initScrollReveals();
  if (typeof ScrollTrigger !== "undefined") {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);
  }
});

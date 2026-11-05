/* ============================================================
   EMO-SHIFT TRAVEL — PRESSKIT JS
   • Nav scroll state + active link tracking
   • Lightbox con teclado (ESC, ←, →)
   • Smooth scroll anchor (CSS hace lo principal)
   • Ajuste de viewport para hero en móvil
   ============================================================ */
"use strict";

(function(){
  // ---------- 1. Nav scrolled state + active link ----------
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  function onScroll(){
    if(nav){
      if(window.scrollY > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
    // Active link tracking
    const scrollPos = window.scrollY + 120;
    let active = sections[0];
    for(const s of sections){
      if(s.offsetTop <= scrollPos) active = s;
    }
    if(active){
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + active.id);
      });
    }
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  // ---------- 2. Lightbox ----------
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCap = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  let lbIndex = 0;

  function openLb(i){
    lbIndex = (i + galleryItems.length) % galleryItems.length;
    const item = galleryItems[lbIndex];
    const src = item.getAttribute('data-full');
    const cap = item.getAttribute('data-caption') || '';
    lbImg.src = src;
    lbImg.alt = cap;
    lbCap.textContent = cap;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }
  function closeLb(){
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
    if(galleryItems[lbIndex]) galleryItems[lbIndex].focus();
  }

  galleryItems.forEach((it, i) => {
    it.addEventListener('click', () => openLb(i));
    it.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openLb(i); }
    });
  });

  if(lbClose) lbClose.addEventListener('click', closeLb);
  if(lbPrev) lbPrev.addEventListener('click', () => openLb(lbIndex - 1));
  if(lbNext) lbNext.addEventListener('click', () => openLb(lbIndex + 1));

  document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('show')) return;
    if(e.key === 'Escape') closeLb();
    else if(e.key === 'ArrowLeft') openLb(lbIndex - 1);
    else if(e.key === 'ArrowRight') openLb(lbIndex + 1);
  });

  // Click fuera de la imagen cierra
  if(lightbox){
    lightbox.addEventListener('click', (e) => {
      if(e.target === lightbox) closeLb();
    });
  }

  // ---------- 3. Hero CTA "Jugar demo" scroll to contacto ----------
  // (HTML usa anclas; no se requiere JS extra)

  // ---------- 4. Print: mostrar mensaje cuando se imprime ----------
  window.addEventListener('beforeprint', () => {
    console.log('Imprimiendo presskit EMO-SHIFT TRAVEL');
  });

  // ---------- 5. Lazy-load fallback para navegadores viejos ----------
  if(!('loading' in HTMLImageElement.prototype)){
    // Ya están cargadas; no hacemos nada
  }

  // ---------- 6. Analytics respetuoso (sin tracking real) ----------
  // Sólo contamos visitas en localStorage para mostrar "X visitas" opcional
  try {
    const key = 'est_presskit_visits';
    let n = parseInt(localStorage.getItem(key) || '0', 10) + 1;
    localStorage.setItem(key, String(n));
  } catch(e){ /* ignore */ }

})();

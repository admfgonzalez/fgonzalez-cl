/* ==========================================================================
   fgonzalez.cl — Animated Particle Network Background
   Canvas-based tech aesthetic: floating nodes + connecting lines
   ========================================================================== */

(function () {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // ── Config ───────────────────────────────────────────────────────────────
  const CONFIG = {
    particleCount: 72,           // total nodes
    connectionDistance: 160,     // max px to draw connecting line
    mouseRadius: 140,            // radius of mouse attraction/repulsion
    speed: 0.38,                 // base movement speed
    minRadius: 1.2,
    maxRadius: 3.2,
    accentRatio: 0.14,           // fraction of nodes that glow orange
    bgColor: '#131211',
    nodeColor: 'rgba(255,255,255,0.35)',
    accentColor: '#f46c38',
    lineColor: 'rgba(255,255,255,0.055)',
    accentLineColor: 'rgba(244,108,56,0.18)',
    pulseSpeed: 0.018,
  };

  // ── State ─────────────────────────────────────────────────────────────────
  let W, H, particles, mouse = { x: -9999, y: -9999 }, rafId;

  // ── Resize ────────────────────────────────────────────────────────────────
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // ── Particle factory ──────────────────────────────────────────────────────
  function createParticle() {
    const isAccent = Math.random() < CONFIG.accentRatio;
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * CONFIG.speed,
      vy: (Math.random() - 0.5) * CONFIG.speed,
      r: CONFIG.minRadius + Math.random() * (CONFIG.maxRadius - CONFIG.minRadius),
      baseR: 0,          // set below
      isAccent,
      phase: Math.random() * Math.PI * 2,   // for pulse
      opacity: isAccent ? 0.9 : 0.4 + Math.random() * 0.4,
    };
  }

  function initParticles() {
    particles = Array.from({ length: CONFIG.particleCount }, () => {
      const p = createParticle();
      p.baseR = p.r;
      return p;
    });
  }

  // ── Draw ──────────────────────────────────────────────────────────────────
  function draw(ts) {
    ctx.clearRect(0, 0, W, H);

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;

      // Pulse size
      p.phase += CONFIG.pulseSpeed;
      p.r = p.baseR + Math.sin(p.phase) * 0.5;

      // Mouse repulsion (gentle)
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const md  = Math.sqrt(mdx * mdx + mdy * mdy);
      if (md < CONFIG.mouseRadius && md > 0) {
        const force = (CONFIG.mouseRadius - md) / CONFIG.mouseRadius * 0.012;
        p.vx += (mdx / md) * force;
        p.vy += (mdy / md) * force;
        // Clamp velocity
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > CONFIG.speed * 2.5) {
          p.vx = (p.vx / spd) * CONFIG.speed * 2.5;
          p.vy = (p.vy / spd) * CONFIG.speed * 2.5;
        }
      }

      // Draw connecting lines to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.connectionDistance) {
          const alpha = (1 - dist / CONFIG.connectionDistance);
          const isAccentLine = p.isAccent || q.isAccent;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);

          if (isAccentLine) {
            ctx.strokeStyle = `rgba(244,108,56,${alpha * 0.25})`;
            ctx.lineWidth = 0.9;
          } else {
            ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.07})`;
            ctx.lineWidth = 0.6;
          }
          ctx.stroke();
        }
      }

      // Draw node
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

      if (p.isAccent) {
        // Glowing orange node
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
        grad.addColorStop(0, `rgba(244,108,56,${p.opacity})`);
        grad.addColorStop(0.5, `rgba(244,108,56,${p.opacity * 0.4})`);
        grad.addColorStop(1, 'rgba(244,108,56,0)');
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = CONFIG.accentColor;
        ctx.fill();
      } else {
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      }
    }

    rafId = requestAnimationFrame(draw);
  }

  // ── Mouse tracking ────────────────────────────────────────────────────────
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // ── Resize handling ───────────────────────────────────────────────────────
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cancelAnimationFrame(rafId);
      resize();
      initParticles();
      rafId = requestAnimationFrame(draw);
    }, 200);
  });

  // ── Init ──────────────────────────────────────────────────────────────────
  resize();
  initParticles();
  rafId = requestAnimationFrame(draw);
})();

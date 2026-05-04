@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── Custom Properties ────────────────────────────────── */
:root {
  --red:      #B91C1C;
  --red-d:    #7F1D1D;
  --gold:     #D97706;
  --gold-l:   #F59E0B;
  --dark:     #0F172A;
  --navy:     #1E293B;
  --cream:    #FDFCF8;
  --muted:    #64748B;
  --border:   rgba(255,255,255,0.08);
}

/* ─── Base Reset & Typography ───────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  @apply font-body bg-ca-cream text-ca-dark m-0;
  min-height: 100dvh;
}

/* ─── Animation Delays ──────────────────────────────────── */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }

/* ─── Glass Card Utility ────────────────────────────────── */
.glass {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.1);
}

/* ─── Gold Gradient Text ────────────────────────────────── */
.text-gold-gradient {
  background: linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── Red Gradient ──────────────────────────────────────── */
.bg-ca-gradient {
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #2D1515 100%);
}

/* ─── Announcement Card Hover ───────────────────────────── */
.announcement-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.announcement-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border-color: var(--red);
}

/* ─── Nav Link Underline Animation ─────────────────────── */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -2px;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transition: transform 0.2s ease;
  transform-origin: left;
}
.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

/* ─── Quick Nav Card Hover ──────────────────────────────── */
.quick-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.quick-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(0,0,0,0.12);
}

/* ─── Button Shine Effect ───────────────────────────────── */
.btn-primary {
  position: relative;
  overflow: hidden;
}
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  transition: left 0.5s ease;
}
.btn-primary:hover::before {
  left: 150%;
}

/* ─── Scrollbar ─────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--cream); }
::-webkit-scrollbar-thumb { background: var(--red); border-radius: 3px; }

/* ─── Selection ─────────────────────────────────────────── */
::selection {
  background: rgba(185, 28, 28, 0.2);
  color: var(--red-d);
}

/* ─── Focus Visible ─────────────────────────────────────── */
:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
  border-radius: 3px;
}

/* ─── Diagonal Section Separator ───────────────────────── */
.diagonal-top {
  clip-path: polygon(0 6%, 100% 0%, 100% 100%, 0 100%);
  margin-top: -3rem;
  padding-top: 5rem;
}

/* ─── Hero Stars Background ─────────────────────────────── */
.hero-stars {
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px),
    radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 60px 60px, 30px 30px;
  background-position: 0 0, 15px 15px;
}

/* ─── Noise Texture Overlay ─────────────────────────────── */
.noise::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.4;
  border-radius: inherit;
}

/* ─── Mobile Menu Animation ─────────────────────────────── */
.mobile-menu-enter {
  animation: menuSlide 0.25s ease-out;
}
@keyframes menuSlide {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Feature Icon Ring ─────────────────────────────────── */
.icon-ring {
  width: 56px; height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(185,28,28,0.1);
  border: 1px solid rgba(185,28,28,0.2);
  transition: background 0.2s ease, border-color 0.2s ease;
}
.quick-card:hover .icon-ring {
  background: rgba(185,28,28,0.18);
  border-color: rgba(185,28,28,0.4);
}

/* ─── Stat Badge ─────────────────────────────────────────── */
.stat-badge {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

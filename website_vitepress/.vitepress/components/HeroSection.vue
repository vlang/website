<template>
  <section class="hero">
    <!-- top identity row -->
    <div class="hero-identity">
      <img src="/img/v-logo.png" alt="V logo" class="hero-logo" />
      <span class="hero-name">The V Programming Language</span>
      <span class="version-badge">v0.5.0</span>
    </div>

    <!-- headline -->
    <div class="hero-headline">
      <h1 class="hero-motto">
        <span class="motto-word">Simple.</span>
        <span class="motto-word accent">Fast.</span>
        <span class="motto-word">Safe.</span>
        <span class="motto-word muted">Compiled.</span>
      </h1>
      <p class="hero-sub">For developing maintainable software.</p>
    </div>

    <!-- action row -->
    <div class="hero-actions">
      <DownloadButton />
      <a
        class="btn-github"
        href="https://github.com/vlang/v"
        target="_blank"
        rel="noopener"
      >
        <svg class="github-icon" viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
               0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
               -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
               2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
               0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21
               2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04
               2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82
               2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
               1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        GitHub
        <span class="stars">★ {{ formattedStars }}</span>
      </a>
    </div>

    <!-- quick links -->
    <nav class="hero-links" aria-label="Quick links">
      <a href="https://fast.vlang.io/" target="_blank" rel="noopener">Is V still fast?</a>
      <span class="dot" aria-hidden="true">·</span>
      <a href="https://github.com/vlang/v/wiki/FAQ" target="_blank">FAQ</a>
      <span class="dot" aria-hidden="true">·</span>
      <a href="/docs/">Docs</a>
      <span class="dot" aria-hidden="true">·</span>
      <a href="https://github.com/vlang/v/blob/master/CHANGELOG.md" target="_blank">Changelog</a>
      <span class="dot" aria-hidden="true">·</span>
      <a href="/showcase">Built with V</a>
      <span class="dot" aria-hidden="true">·</span>
      <a href="https://github.com/vlang/rfcs" target="_blank" rel="noopener">RFCs</a>
    </nav>

    <!-- video demo carousel -->
    <div class="hero-carousel">
      <VideoDemoCarousel />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import DownloadButton from './DownloadButton.vue'
import VideoDemoCarousel from './VideoDemoCarousel.vue'

const stars = ref<number | null>(null)

const formattedStars = computed(() => {
  if (stars.value === null) return ''
  if (stars.value >= 1000) return `${(stars.value / 1000).toFixed(0)}k`
  return String(stars.value)
})

onMounted(async () => {
  try {
    const res = await fetch('https://api.github.com/repos/vlang/v')
    const data = await res.json()
    stars.value = data.stargazers_count
  } catch {
    // silently fail
  }
})
</script>

<style scoped>
/* ── section shell ── */
.hero {
  background: #000;
  padding: 88px 24px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

/* ── identity row ── */
.hero-identity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 48px;
}

.hero-logo {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.hero-name {
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.2px;
}

.version-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(64, 120, 192, 0.18);
  color: #7ab0f5;
  border: 1px solid rgba(64, 120, 192, 0.45);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 9px;
  letter-spacing: 0.5px;
}

/* ── headline ── */
.hero-headline {
  margin-bottom: 40px;
}

.hero-motto {
  margin: 0 0 20px;
  padding: 0;
  border: none;
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -2px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 0.25em;
}

.motto-word {
  color: #fff;
  display: inline-block;
}

.motto-word.accent {
  color: #4078c0;
  background: linear-gradient(135deg, #4078c0, #7ab0f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.motto-word.muted {
  color: rgba(255, 255, 255, 0.35);
}

.hero-sub {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.1px;
}

/* ── actions ── */
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 24px;
}

.btn-github {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}

.btn-github:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.github-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.stars {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 2px;
}

/* ── quick links ── */
.hero-links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 13px;
  margin-bottom: 56px;
}

.hero-links a {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.hero-links a:hover {
  color: rgba(255, 255, 255, 0.85);
}

.dot {
  color: rgba(255, 255, 255, 0.2);
}

/* ── carousel container ── */
.hero-carousel {
  width: 100%;
  max-width: 1100px;
}

/* ── responsive ── */
@media (max-width: 640px) {
  .hero {
    padding: 64px 16px 56px;
  }

  .hero-motto {
    letter-spacing: -1px;
    gap: 0 0.2em;
  }

  .hero-sub {
    font-size: 16px;
  }

  .hero-links {
    margin-bottom: 40px;
  }
}
</style>

<template>
  <section class="hero">
    <div class="hero-inner">
      <!-- Left column -->
      <div class="hero-info">
        <div class="hero-brand">
          <img src="/img/v-logo.png" alt="V logo" class="hero-logo" />
          <div class="hero-title-block">
            <h1 class="hero-title">The V Programming Language</h1>
            <span class="version-badge">v0.5.0</span>
          </div>
        </div>

        <p class="hero-tagline">
          Simple, fast, safe, compiled.<br />
          For developing maintainable software.
        </p>

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
            <span class="stars">★ 37k</span>
          </a>
        </div>

        <div class="hero-links">
          <a href="https://github.com/vlang/v/wiki/FAQ" target="_blank">FAQ</a>
          <span class="dot">·</span>
          <a href="/docs/">Docs</a>
          <span class="dot">·</span>
          <a href="https://github.com/vlang/v/blob/master/CHANGELOG.md" target="_blank">Changelog</a>
          <span class="dot">·</span>
          <a href="/showcase">Built with V</a>
        </div>
      </div>

      <!-- Right column: code carousel -->
      <div class="hero-code">
        <CodeCarousel />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DownloadButton from './DownloadButton.vue'
import CodeCarousel from './CodeCarousel.vue'
</script>

<style scoped>
.hero {
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 72px 24px 64px;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 64px;
}

/* ---------- left column ---------- */
.hero-info {
  flex: 1;
  min-width: 0;
}

.hero-brand {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.hero-logo {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}

.hero-title-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero-title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--vp-c-text-1);
  margin: 0;
  border: none;
  padding: 0;
}

.version-badge {
  display: inline-block;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 10px;
  letter-spacing: 0.5px;
  width: fit-content;
}

.hero-tagline {
  font-size: 18px;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  margin: 0 0 28px;
}

/* ---------- action row ---------- */
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.btn-github {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 11px 20px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}

.btn-github:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-elv);
}

.github-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.stars {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-left: 2px;
}

/* ---------- quick links ---------- */
.hero-links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 14px;
}

.hero-links a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.hero-links a:hover {
  text-decoration: underline;
}

.dot {
  color: var(--vp-c-text-3);
}

/* ---------- right column ---------- */
.hero-code {
  flex: 1;
  min-width: 0;
}

/* ---------- responsive ---------- */
@media (max-width: 900px) {
  .hero-inner {
    flex-direction: column;
    gap: 40px;
  }
  .hero-code {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 48px 16px 40px;
  }
  .hero-title {
    font-size: 22px;
  }
  .hero-tagline {
    font-size: 16px;
  }
}
</style>

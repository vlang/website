<template>
  <section class="testimonials-section">
    <div class="testimonials-inner">
      <h2 class="section-title">{{ i18n.testimonials.title }}</h2>
      <div class="scroll-wrapper">
        <div class="cards-track">
          <a
            v-for="t in testimonials"
            :key="t.author"
            :href="t.url"
            class="card"
            target="_blank"
            rel="noopener"
          >
            <p class="quote">"{{ t.quote }}"</p>
            <div class="attribution">
              <span class="author">{{ t.author }}</span>
              <span class="source">{{ t.source }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTranslations } from '../composables/useTranslations'

const i18n = useTranslations()

const testimonials = [
  {
    quote:
      "V is an impressive programming language. Its simplicity paired with speed makes it stand out.",
    author: "@dev1",
    source: "Discord",
    url: "https://discord.gg/vlang",
  },
  {
    quote:
      "I've been using V for scripting and it's absolutely sensational. The compile times are insane.",
    author: "@rustlover99",
    source: "Discord",
    url: "https://discord.gg/vlang",
  },
  {
    quote:
      "V has the right ideas. Readable code, fast compilation, and no GC pauses by default — what more could you want?",
    author: "@sysdev_42",
    source: "Blog",
    url: "https://github.com/vlang/v/discussions",
  },
  {
    quote:
      "Coming from Go, V feels immediately familiar but faster and more opinionated in the right ways.",
    author: "@gopher_go_brrr",
    source: "Discord",
    url: "https://discord.gg/vlang",
  },
  {
    quote:
      "The 400KB compiler with zero dependencies is not a gimmick — it actually works, anywhere.",
    author: "@embedded_life",
    source: "Discord",
    url: "https://discord.gg/vlang",
  },
  {
    quote:
      "Hot code reloading in V changed how I build GUI apps. No more restarting just to see a layout change.",
    author: "@gui_wizard",
    source: "Forum",
    url: "https://github.com/vlang/v/discussions",
  },
]
</script>

<style scoped>
.testimonials-section {
  padding: 80px 24px;
  background: var(--vp-c-bg);
}

.testimonials-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 32px;
  border: none;
  padding: 0;
}

.scroll-wrapper {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--vp-c-divider) transparent;
  padding-bottom: 8px;
}

.scroll-wrapper::-webkit-scrollbar {
  height: 4px;
}

.scroll-wrapper::-webkit-scrollbar-thumb {
  background: var(--vp-c-divider);
  border-radius: 2px;
}

.cards-track {
  display: flex;
  gap: 16px;
  width: max-content;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  flex-shrink: 0;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 20px rgba(64, 120, 192, 0.1);
}

.quote {
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0 0 20px;
  font-style: italic;
}

.attribution {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.author {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.source {
  font-size: 12px;
  color: var(--vp-c-text-3);
}
</style>

<template>
  <section class="news-section">
    <div class="news-inner">
      <h2 class="section-title">Latest News</h2>
      <div class="news-scroll-wrapper">
        <div class="news-track">
          <a
            v-for="item in news"
            :key="item.version"
            :href="item.url"
            class="news-chip"
            target="_blank"
            rel="noopener"
          >
            <span class="news-version">{{ item.version }}</span>
            <span class="news-date">{{ item.date }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { data as news } from '../releases.data'
</script>

<style scoped>
.news-section {
  padding: 64px 24px;
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
}

.news-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 28px;
  border: none;
  padding: 0;
}

.news-scroll-wrapper {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--vp-c-divider) transparent;
  padding-bottom: 8px;
}

.news-scroll-wrapper::-webkit-scrollbar {
  height: 4px;
}

.news-scroll-wrapper::-webkit-scrollbar-thumb {
  background: var(--vp-c-divider);
  border-radius: 2px;
}

.news-track {
  display: flex;
  gap: 10px;
  width: max-content;
}

.news-chip {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 12px 18px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
  white-space: nowrap;
}

.news-chip:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.news-version {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.news-date {
  font-size: 12px;
  color: var(--vp-c-text-3);
}
</style>

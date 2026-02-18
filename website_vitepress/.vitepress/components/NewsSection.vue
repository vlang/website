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
const news = [
  { version: 'V 0.5.0', date: 'Dec 31, 2025', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.12', date: 'Sep 2025', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.9', date: 'Jun 2025', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.8', date: 'Feb 2025', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.7', date: 'Oct 2024', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.6', date: 'Jun 2024', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.5', date: 'Mar 2024', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.4', date: 'Jan 2024', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.3', date: 'Nov 2023', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.2', date: 'Oct 2023', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.1', date: 'Sep 2023', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.4.0', date: 'Jul 2023', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.3.5', date: 'Mar 2023', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.3.4', date: 'Jan 2023', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.3.3', date: 'Oct 2022', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
  { version: 'V 0.3.2', date: 'Sep 2022', url: 'https://github.com/vlang/v/blob/master/CHANGELOG.md' },
]
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

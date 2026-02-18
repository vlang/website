<template>
  <section class="sponsors-section">
    <div class="sponsors-inner">
      <h2 class="section-title">Partners &amp; Sponsors</h2>

      <div class="sponsor-grid">
        <a
          v-for="s in sponsors"
          :key="s.name"
          :href="s.url"
          class="sponsor-card"
          target="_blank"
          rel="noopener"
          :aria-label="s.name"
        >
          <img v-if="s.logo" :src="s.logo" :alt="s.name" class="sponsor-logo" />
          <span v-else class="sponsor-name">{{ s.name }}</span>
        </a>
      </div>

      <a
        href="https://github.com/sponsors/medvednikov"
        class="become-link"
        target="_blank"
        rel="noopener"
      >
        Become a sponsor via GitHub Sponsors
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Sponsor {
  name: string
  url: string
  logo?: string
}

const sponsors: Sponsor[] = [
  { name: 'Huly', url: 'https://huly.io/', logo: '/img/sponsor_huly.jpg' },
  { name: 'Threefold', url: 'https://threefold.io/', logo: '/img/sponsor_threefold.svg' },
  { name: 'Syndica', url: 'https://syndica.io/', logo: '/img/sponsor_syndica.jpg' },
  { name: 'OctoberSwimmer', url: 'https://www.octoberswimmer.com', logo: '/img/sponsor_octoberswimmer.png' },
  { name: 'MX', url: 'https://mx.com/', logo: '/img/sponsor_mx.png' },
  { name: 'Whatlab', url: 'https://whatlab.rip/', logo: '/img/sponsor_whatlab.png' },
]
</script>

<style scoped>
.sponsors-section {
  padding: 72px 24px;
  background: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
}

.sponsors-inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 26px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 40px;
  border: none;
  padding: 0;
}

.sponsor-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
}

.sponsor-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 175px;
  padding: 16px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
  overflow: hidden;
}

.sponsor-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.sponsor-logo {
  height: 140px;
  max-width: 230px;
  object-fit: contain;
  filter: grayscale(20%);
  opacity: 0.9;
  transition: filter 0.2s, opacity 0.2s;
}

.sponsor-card:hover .sponsor-logo {
  filter: grayscale(0%);
  opacity: 1;
}

.sponsor-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-2);
  padding: 0 16px;
}

.become-link {
  display: inline-block;
  font-size: 15px;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}

.become-link:hover {
  color: var(--vp-c-brand-2);
}
</style>

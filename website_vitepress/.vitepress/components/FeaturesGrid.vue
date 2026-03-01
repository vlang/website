<template>
  <section class="features-section">
    <div class="features-inner">
      <div class="section-header">
        <span class="section-eyebrow">{{ t.features.eyebrow }}</span>
        <h2 class="section-title">{{ t.features.title }}</h2>
        <p class="section-sub">
          {{ t.features.sub }}
        </p>
      </div>

      <div class="features-grid">
        <div v-for="f in features" :key="f.title" class="feature-card">
          <div class="card-top">
            <div class="feature-icon-wrap">
              <Icon :icon="f.icon" class="feature-icon" aria-hidden="true" />
            </div>
          </div>
          <h3 class="feature-title">{{ f.title }}</h3>
          <p class="feature-desc">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useTranslations } from '../composables/useTranslations'

const t = useTranslations()

const featureIcons = [
  'lucide:zap',
  'lucide:shield-check',
  'lucide:gauge',
  'lucide:book-open',
  'lucide:box',
  'lucide:arrow-left-right',
  'lucide:refresh-cw',
  'lucide:database',
  'lucide:globe',
]

const features = computed(() =>
  t.features.items.map((item, i) => ({ icon: featureIcons[i], ...item }))
)
</script>

<style scoped>
.features-section {
  padding: 96px 24px;
  background: var(--vp-c-bg-alt);
  position: relative;
  overflow: hidden;
}

.features-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--vp-c-divider) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.5;
  pointer-events: none;
}

.features-inner {
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 35%, transparent);
  background: color-mix(in srgb, var(--vp-c-brand-1) 8%, transparent);
  padding: 4px 12px;
  border-radius: 99px;
  margin-bottom: 16px;
}

.section-title {
  font-size: 36px;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
  border: none;
  padding: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.section-sub {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 480px;
  margin-inline: auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.feature-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 28px 26px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2, var(--vp-c-brand-1)));
  opacity: 0;
  transition: opacity 0.2s ease;
}

.feature-card:hover {
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 50%, transparent);
  box-shadow: 0 8px 32px color-mix(in srgb, var(--vp-c-brand-1) 10%, transparent);
  transform: translateY(-2px);
}

.feature-card:hover::before {
  opacity: 1;
}

.card-top {
  margin-bottom: 18px;
}

.feature-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--vp-c-brand-1) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 25%, transparent);
  color: var(--vp-c-brand-1);
  transition: background 0.2s ease, border-color 0.2s ease;
}

.feature-card:hover .feature-icon-wrap {
  background: color-mix(in srgb, var(--vp-c-brand-1) 18%, transparent);
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 40%, transparent);
}

.feature-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.feature-title {
  font-size: 15px;
  font-weight: 650;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
  border: none;
  padding: 0;
  letter-spacing: -0.01em;
}

.feature-desc {
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0;
}

@media (max-width: 900px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 30px;
  }
}

@media (max-width: 540px) {
  .features-section {
    padding: 72px 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .section-title {
    font-size: 26px;
  }
}
</style>

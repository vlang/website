<template>
  <div class="vdc">
    <!-- Large featured video slot -->
    <div class="vdc-stage">
      <div
        class="vdc-featured"
        :style="{ backgroundImage: `url(${demos[active].thumbnail})` }"
        @click="openModal(active)"
      >
        <div class="vdc-featured-overlay">
          <div class="vdc-play-ring">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
          <div class="vdc-featured-meta">
            <span class="vdc-tag">{{ demos[active].tag }}</span>
            <h3 class="vdc-featured-title">{{ demos[active].title }}</h3>
            <p class="vdc-featured-desc">{{ demos[active].desc }}</p>
          </div>
        </div>
      </div>

      <!-- Thumbnails row -->
      <div class="vdc-thumbs">
        <button
          v-for="(demo, i) in demos"
          :key="demo.id"
          class="vdc-thumb"
          :class="{ active: active === i }"
          @click="active = i"
          :aria-label="demo.title"
        >
          <img :src="demo.thumbnail" :alt="demo.title" />
          <span class="vdc-thumb-label">{{ demo.title }}</span>
          <span class="vdc-thumb-indicator" />
        </button>
      </div>
    </div>

    <!-- Modal lightbox -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="modalOpen" class="vdc-modal" @click.self="closeModal" role="dialog" aria-modal="true">
          <button class="vdc-modal-close" @click="closeModal" aria-label="Close video">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div class="vdc-modal-frame">
            <iframe
              v-if="modalOpen"
              :src="`https://www.youtube.com/embed/${demos[modalIndex].videoId}?autoplay=1&rel=0`"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
              frameborder="0"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const demos = [
  {
    id: 'intro',
    tag: 'Overview',
    title: 'V in 100 Seconds',
    desc: 'A quick tour of V — syntax, speed, and what makes it different.',
    // YouTube thumbnail for video ID Q8V5gu50HhE
    thumbnail: 'https://i.ytimg.com/vi/Q8V5gu50HhE/maxresdefault.jpg',
    videoId: 'Q8V5gu50HhE',
  },
  {
    id: 'vweb',
    tag: 'Web',
    title: 'Building a Web App',
    desc: 'Create a full-stack web application with vweb — V\'s built-in HTTP framework.',
    thumbnail: 'https://i.ytimg.com/vi/LFG4_2LSRMI/maxresdefault.jpg',
    videoId: 'LFG4_2LSRMI',
  },
  {
    id: 'perf',
    tag: 'Performance',
    title: 'V vs C Benchmarks',
    desc: 'Comparing V compilation speed and runtime performance against C and Go.',
    thumbnail: 'https://i.ytimg.com/vi/1rkp_nHAJPc/maxresdefault.jpg',
    videoId: '1rkp_nHAJPc',
  },
  {
    id: 'memory',
    tag: 'Memory Safety',
    title: 'No GC, No Leaks',
    desc: 'How V achieves memory safety without a garbage collector.',
    thumbnail: 'https://i.ytimg.com/vi/8yHlNTLoFiA/maxresdefault.jpg',
    videoId: '8yHlNTLoFiA',
  },
]

const active = ref(0)
const modalOpen = ref(false)
const modalIndex = ref(0)

function openModal(i: number) {
  modalIndex.value = i
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}
</script>

<style scoped>
/* ── wrapper ── */
.vdc {
  width: 100%;
}

/* ── featured slot ── */
.vdc-featured {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.vdc-featured:hover {
  transform: scale(1.005);
}

.vdc-featured-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.25s;
}

.vdc-featured:hover .vdc-featured-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
}

.vdc-play-ring {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: background 0.2s, transform 0.2s;
  flex-shrink: 0;
  margin-bottom: 24px;
}

.vdc-play-ring svg {
  width: 28px;
  height: 28px;
  margin-left: 4px;
}

.vdc-featured:hover .vdc-play-ring {
  background: rgba(255, 255, 255, 0.22);
  transform: scale(1.08);
}

.vdc-featured-meta {
  text-align: center;
  padding: 0 32px;
}

.vdc-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 8px;
}

.vdc-featured-title {
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

.vdc-featured-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.72);
  margin: 0;
  max-width: 440px;
  line-height: 1.5;
}

/* ── thumbnail strip ── */
.vdc-thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 12px;
}

.vdc-thumb {
  position: relative;
  background: transparent;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  aspect-ratio: 16 / 9;
  transition: transform 0.2s;
}

.vdc-thumb:hover {
  transform: scale(1.03);
}

.vdc-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.5) saturate(0.8);
  transition: filter 0.2s;
}

.vdc-thumb.active img,
.vdc-thumb:hover img {
  filter: brightness(0.75) saturate(1);
}

.vdc-thumb-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 8px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
  pointer-events: none;
  line-height: 1.2;
}

.vdc-thumb-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--vp-c-brand-1);
  opacity: 0;
  transition: opacity 0.2s;
  border-radius: 0 0 10px 10px;
}

.vdc-thumb.active .vdc-thumb-indicator {
  opacity: 1;
}

/* ── modal ── */
.vdc-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.vdc-modal-close {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.vdc-modal-close:hover {
  background: rgba(255,255,255,0.2);
}

.vdc-modal-close svg {
  width: 18px;
  height: 18px;
}

.vdc-modal-frame {
  width: min(900px, 100%);
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0,0,0,0.8);
}

.vdc-modal-frame iframe {
  width: 100%;
  height: 100%;
}

/* ── modal transitions ── */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* ── responsive ── */
@media (max-width: 640px) {
  .vdc-thumbs {
    grid-template-columns: repeat(2, 1fr);
  }

  .vdc-featured-title {
    font-size: 18px;
  }

  .vdc-play-ring {
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
  }
}
</style>

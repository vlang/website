<template>
  <div class="showcase-page">
    <div class="showcase-header">
      <h1 class="showcase-title">Built with V</h1>
      <p class="showcase-sub">
        Real-world projects built by the community using the V programming language.
      </p>

      <!-- Category filter -->
      <div class="filter-bar">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-btn"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="showcase-grid">
      <a
        v-for="project in filteredProjects"
        :key="project.name"
        :href="project.url"
        target="_blank"
        rel="noopener"
        class="project-card"
      >
        <div class="card-top">
          <span class="project-icon" aria-hidden="true">{{ project.icon }}</span>
          <span class="project-category-badge">{{ project.category }}</span>
        </div>
        <h3 class="project-name">{{ project.name }}</h3>
        <p class="project-desc">{{ project.desc }}</p>
        <div class="card-footer">
          <svg class="link-icon" viewBox="0 0 16 16" aria-hidden="true">
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
          <span class="link-label">View on GitHub</span>
        </div>
      </a>
    </div>

    <div class="submit-banner">
      <p>
        Built something with V?
        <a
          href="https://github.com/vlang/v/wiki/Built-with-V"
          target="_blank"
          rel="noopener"
        >Submit your project</a>
        to be featured here.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  name: string
  desc: string
  icon: string
  url: string
  category: string
}

const projects: Project[] = [
  // Tools
  {
    name: 'vpm',
    icon: '📦',
    category: 'Tools',
    desc: 'The official V package manager. Search, install and manage V modules from the command line.',
    url: 'https://github.com/vlang/vpm',
  },
  {
    name: 'vid',
    icon: '✏️',
    category: 'Tools',
    desc: 'A fast, cross-platform text editor written in V, inspired by Vim. Runs on Linux, macOS, and Windows.',
    url: 'https://github.com/vlang/vid',
  },
  {
    name: 'v-analyzer',
    icon: '🔍',
    category: 'Tools',
    desc: 'Language server (LSP) for V providing code completion, go-to-definition, hover info, and more for any editor.',
    url: 'https://github.com/vlang/v-analyzer',
  },
  {
    name: 'vls',
    icon: '🛠️',
    category: 'Tools',
    desc: 'An earlier V Language Server implementation providing IDE-like features via the Language Server Protocol.',
    url: 'https://github.com/vlang/vls',
  },
  // Web
  {
    name: 'gitly',
    icon: '🐙',
    category: 'Web',
    desc: 'A light and fast alternative to GitHub/GitLab written in V. Self-hostable git hosting platform.',
    url: 'https://github.com/vlang/gitly',
  },
  {
    name: 'vex',
    icon: '🌐',
    category: 'Web',
    desc: 'An easy-to-use and modular web framework for V with middleware support, routing, and request handling.',
    url: 'https://github.com/nedpals/vex',
  },
  // System
  {
    name: 'Vinix',
    icon: '🐧',
    category: 'System',
    desc: 'A work-in-progress OS kernel and userspace written in V. Boots on x86-64 hardware and QEMU.',
    url: 'https://github.com/vlang/vinix',
  },
  // Graphics & Games
  {
    name: 'vraylib',
    icon: '🎮',
    category: 'Graphics',
    desc: 'V bindings for raylib — a simple and easy-to-use library for games and multimedia applications.',
    url: 'https://github.com/vlang/vraylib',
  },
  {
    name: 'V-OGL',
    icon: '🖼️',
    category: 'Graphics',
    desc: 'OpenGL bindings and graphics utilities for V, enabling hardware-accelerated rendering.',
    url: 'https://github.com/vlang/v-opengl',
  },
  // Apps
  {
    name: 'Volt',
    icon: '💬',
    category: 'Apps',
    desc: 'A cross-platform Discord client built with V. Native performance with a clean user interface.',
    url: 'https://github.com/vlangapp/volt',
  },
  // Libraries
  {
    name: 'vsl',
    icon: '🔢',
    category: 'Libraries',
    desc: 'V Scientific Library — a high-performance library for linear algebra, statistics, and scientific computing.',
    url: 'https://github.com/vlang/vsl',
  },
  {
    name: 'vtl',
    icon: '📊',
    category: 'Libraries',
    desc: 'V Tensor Library — n-dimensional tensor operations inspired by NumPy for numerical computing in V.',
    url: 'https://github.com/vlang/vtl',
  },
]

const allCategory = 'All'
const categories = [allCategory, ...Array.from(new Set(projects.map((p) => p.category)))]

const activeCategory = ref(allCategory)

const filteredProjects = computed(() =>
  activeCategory.value === allCategory
    ? projects
    : projects.filter((p) => p.category === activeCategory.value),
)
</script>

<style scoped>
.showcase-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 24px 80px;
}

/* ---------- header ---------- */
.showcase-header {
  text-align: center;
  margin-bottom: 52px;
}

.showcase-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 14px;
  border: none;
  padding: 0;
}

.showcase-sub {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin: 0 0 32px;
}

/* ---------- filter bar ---------- */
.filter-bar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-btn {
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, color 0.2s;
}

.filter-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.filter-btn.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

/* ---------- grid ---------- */
.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* ---------- card ---------- */
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.project-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 20px rgba(64, 120, 192, 0.12);
  transform: translateY(-2px);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.project-icon {
  font-size: 28px;
}

.project-category-badge {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 20px;
  padding: 2px 9px;
}

.project-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
  border: none;
  padding: 0;
}

.project-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.link-icon {
  width: 14px;
  height: 14px;
  fill: currentColor;
  flex-shrink: 0;
}

.link-label {
  font-weight: 500;
}

/* ---------- submit banner ---------- */
.submit-banner {
  text-align: center;
  margin-top: 56px;
  padding: 24px;
  border-radius: 12px;
  border: 1px dashed var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  font-size: 15px;
  color: var(--vp-c-text-2);
}

.submit-banner p {
  margin: 0;
}

.submit-banner a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}

.submit-banner a:hover {
  text-decoration: underline;
}

/* ---------- responsive ---------- */
@media (max-width: 860px) {
  .showcase-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
  .showcase-title {
    font-size: 28px;
  }
}
</style>

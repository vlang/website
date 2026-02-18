<template>
  <div class="code-carousel">
    <div class="tab-strip" role="tablist">
      <button
        v-for="(tab, i) in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeTab === i }"
        role="tab"
        :aria-selected="activeTab === i"
        @click="activeTab = i"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="code-window">
      <div class="window-chrome">
        <span class="dot red" />
        <span class="dot yellow" />
        <span class="dot green" />
        <span class="filename">{{ tabs[activeTab].filename }}</span>
      </div>
      <div class="code-body">
        <pre class="code-pre"><code v-html="tabs[activeTab].html" /></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Hand-tokenised snippets — classes map to CSS vars defined in custom.css
// We avoid depending on Shiki at runtime; simple span-based highlighting
// matches the existing site's approach and avoids async loading flicker.

function kw(s: string) {
  return `<span class="t-kw">${s}</span>`
}
function fn_(s: string) {
  return `<span class="t-fn">${s}</span>`
}
function str(s: string) {
  return `<span class="t-str">${s}</span>`
}
function num(s: string) {
  return `<span class="t-num">${s}</span>`
}
function cmt(s: string) {
  return `<span class="t-cmt">${s}</span>`
}
function type_(s: string) {
  return `<span class="t-type">${s}</span>`
}

const tabs = [
  {
    id: 'hello',
    label: 'Hello World',
    filename: 'hello.v',
    html: `${kw('fn')} ${fn_('main')}() {
    ${fn_('println')}(${str("'Hello, World!'")})
}`,
  },
]

const activeTab = ref(0)
</script>

<style scoped>
/* ── container ── */
.code-carousel {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  background: var(--v-code-bg);
}

/* ── tabs ── */
.tab-strip {
  display: flex;
  overflow-x: auto;
  background: #161b22;
  scrollbar-width: none;
}

.tab-strip::-webkit-scrollbar {
  display: none;
}

.tab {
  flex-shrink: 0;
  padding: 10px 16px;
  font-size: 13px;
  font-family: var(--vp-font-family-mono);
  color: #8b949e;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.tab:hover {
  color: #c9d1d9;
}

.tab.active {
  color: #e6edf3;
  border-bottom-color: var(--vp-c-brand-1);
}

/* ── chrome bar ── */
.window-chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: #1a2130;
  border-bottom: 1px solid #30363d;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red    { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green  { background: #28c840; }

.filename {
  margin-left: 8px;
  font-size: 12px;
  font-family: var(--vp-font-family-mono);
  color: #8b949e;
}

/* ── code body ── */
.code-body {
  padding: 24px;
  overflow-x: auto;
}

.code-pre {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  font-family: var(--vp-font-family-mono);
  color: var(--v-code-text);
  white-space: pre;
  background: transparent;
}

/* ── token colours ── */
:deep(.t-kw)   { color: var(--v-token-keyword); }
:deep(.t-fn)   { color: var(--v-token-fn); }
:deep(.t-str)  { color: var(--v-token-string); }
:deep(.t-num)  { color: var(--v-token-number); }
:deep(.t-cmt)  { color: var(--v-token-comment); font-style: italic; }
:deep(.t-type) { color: var(--v-token-type); }
</style>

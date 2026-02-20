<template>
  <section class="install-section">
    <div class="install-inner">
      <h2 class="install-heading">Install V from source</h2>
      <p class="install-sub">This will take a couple of seconds.</p>

      <div class="terminal">
        <div class="term-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="term-tab"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id; copied = false"
          >{{ tab.label }}</button>
        </div>
        <div class="term-body">
          <pre class="term-pre"><span class="prompt">$ </span><span class="cmd">{{ currentTab.command }}</span></pre>
          <button class="copy-btn" :class="{ copied }" @click="copyCmd" :aria-label="copied ? 'Copied!' : 'Copy command'">
            <svg v-if="!copied" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        </div>
      </div>

      <p class="install-note">
        Or
        <a
          href="https://github.com/vlang/v/releases/latest"
          target="_blank"
          rel="noopener"
        >download pre-built binaries</a>
        for Windows, macOS, and Linux.
      </p>

      <a class="btn-getting-started" href="/docs/">Getting Started →</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const tabs = [
  { id: 'unix', label: 'Linux & Mac', command: 'git clone --depth=1 https://github.com/vlang/v && cd v && make' },
  { id: 'windows', label: 'Windows', command: 'git clone --depth=1 https://github.com/vlang/v && cd v && make.bat' },
]

const activeTab = ref('unix')
const copied = ref(false)
const currentTab = computed(() => tabs.find(t => t.id === activeTab.value)!)

async function copyCmd() {
  await navigator.clipboard.writeText(currentTab.value.command)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<style scoped>
.install-section {
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 64px 24px;
}

.install-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.install-heading {
  font-size: 26px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
  border: none;
  padding: 0;
}

.install-sub {
  font-size: 15px;
  color: var(--vp-c-text-3);
  margin: 0 0 28px;
}

/* terminal window */
.terminal {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.22);
  text-align: left;
}

.term-tabs {
  display: flex;
  background: #161b22;
}

.term-tab {
  padding: 9px 18px;
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

.term-tab:hover {
  color: #c9d1d9;
}

.term-tab.active {
  color: #e6edf3;
  border-bottom-color: var(--vp-c-brand-1);
}

.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  color: #8b949e;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s, background 0.15s;
}

.copy-btn:hover {
  color: #c9d1d9;
  border-color: #30363d;
  background: #ffffff10;
}

.copy-btn.copied {
  color: #28c840;
  border-color: #28c840;
}

.copy-btn svg {
  width: 15px;
  height: 15px;
}

.term-body {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--v-code-bg);
  padding: 20px 24px;
  overflow-x: auto;
}

.term-pre {
  flex: 1;
  min-width: 0;
}

.term-pre {
  margin: 0;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.6;
  color: var(--v-code-text);
  white-space: pre;
  background: transparent;
}

.prompt {
  color: var(--v-token-keyword);
  user-select: none;
}

.cmd {
  color: #e6edf3;
}

.install-note {
  margin-top: 20px;
  font-size: 14px;
  color: var(--vp-c-text-3);
}

.install-note a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.install-note a:hover {
  text-decoration: underline;
}

.btn-getting-started {
  display: inline-flex;
  align-items: center;
  margin-top: 24px;
  padding: 11px 22px;
  border-radius: 8px;
  border: 1px solid rgba(64, 120, 192, 0.6);
  background: rgba(64, 120, 192, 0.2);
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s, color 0.2s;
}

.btn-getting-started:hover {
  border-color: rgba(64, 120, 192, 0.9);
  background: rgba(64, 120, 192, 0.35);
  color: #fff;
}
</style>

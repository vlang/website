<template>
  <section class="install-section">
    <div class="install-inner">
      <h2 class="install-heading">Install V from source</h2>
      <p class="install-sub">This will take a couple of seconds.</p>

      <div class="terminal">
        <div class="term-chrome">
          <span class="dot red" />
          <span class="dot yellow" />
          <span class="dot green" />
          <span class="term-label">Terminal</span>
          <div class="chrome-right">
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
        <div class="term-body">
          <pre class="term-pre"><span class="prompt">$ </span><span class="cmd">git clone --depth=1 https://github.com/vlang/v &amp;&amp; cd v &amp;&amp; make</span></pre>
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const copied = ref(false)
const command = 'git clone --depth=1 https://github.com/vlang/v && cd v && make'

async function copyCmd() {
  await navigator.clipboard.writeText(command)
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

.term-chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: #1a2130;
}

.chrome-right {
  margin-left: auto;
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

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red    { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green  { background: #28c840; }

.term-label {
  margin-left: 8px;
  font-size: 12px;
  font-family: var(--vp-font-family-mono);
  color: #8b949e;
}

.term-body {
  background: var(--v-code-bg);
  padding: 20px 24px;
  overflow-x: auto;
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
</style>

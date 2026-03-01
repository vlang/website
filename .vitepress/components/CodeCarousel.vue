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
        <div class="chrome-right">
          <button class="copy-btn" :class="{ copied }" @click="copyCode" :aria-label="copied ? 'Copied!' : 'Copy code'">
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
      <div class="code-panels" :style="{ height: panelsHeight }">
        <div
          v-for="(tab, i) in tabs"
          :key="tab.id"
          :ref="el => { if (el) panelEls[i] = el as HTMLElement }"
          class="code-panel"
          :class="{ active: activeTab === i }"
        >
          <pre class="code-pre"><code v-html="tab.html" /></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  {
    id: 'fetch',
    label: 'HTTP Fetch',
    filename: 'fetch.v',
    html: `${kw('import')} time
${kw('import')} net.http

${kw('fn')} ${fn_('main')}() {
    resp := http.${fn_('get')}(${str("'https://vlang.io/utc_now'")}) ${kw('or')} {
        ${fn_('eprintln')}(${str("'Failed to fetch. Error: \${err}'")})
        ${kw('return')}
    }

    t := time.${fn_('unix')}(resp.body.${fn_('int')}())
    ${fn_('println')}(t.${fn_('format')}())
}`,
  },
  {
    id: 'json',
    label: 'JSON',
    filename: 'json.v',
    html: `${kw('import')} json

${kw('struct')} ${type_('User')} {
    name ${type_('string')}
    age  ${type_('int')}
${kw('mut')}:
    is_registered ${type_('bool')}
}

${kw('fn')} ${fn_('main')}() {
    s := ${str("'[{\"name\":\"Frodo\",\"age\":25}]'")}
    users := json.${fn_('decode')}([]${type_('User')}, s) ${kw('or')} {
        ${fn_('eprintln')}(${str("'Failed to parse json'")})
        ${kw('return')}
    }
    ${fn_('println')}(json.${fn_('encode')}(users))
}`,
  },
  {
    id: 'concurrency',
    label: 'Concurrency',
    filename: 'concurrency.v',
    html: `${kw('import')} time

${kw('fn')} ${fn_('expensive_computing')}(id ${type_('int')}, duration ${type_('int')}) {
    ${fn_('println')}(${str("'Starting task \${id}...'")} )
    time.${fn_('sleep')}(duration * time.millisecond)
    ${fn_('println')}(${str("'Finished task \${id} in \${duration} ms'")})
}

${kw('fn')} ${fn_('main')}() {
    ${kw('mut')} threads := []${type_('thread')}{}
    threads << ${kw('spawn')} ${fn_('expensive_computing')}(${num('1')}, ${num('100')})
    threads << ${kw('spawn')} ${fn_('expensive_computing')}(${num('2')}, ${num('500')})
    threads << ${kw('spawn')} ${fn_('expensive_computing')}(${num('3')}, ${num('1000')})
    threads.${fn_('wait')}()
    ${fn_('println')}(${str("'All jobs finished!'")})
}`,
  },
  {
    id: 'http',
    label: 'HTTP Server',
    filename: 'server.v',
    html: `${kw('import')} net.http

${kw('struct')} ${type_('Handler')} {}

${kw('fn')} (h ${type_('Handler')}) ${fn_('handle')}(req http.${type_('Request')}) http.${type_('Response')} {
    ${kw('return')} ${kw('match')} req.url {
        ${str("'/hello'")} { http.${type_('Response')}{ body: ${str("'world\\n'")} } }
        ${str("'/foo'")}   { http.${type_('Response')}{ body: ${str("'bar\\n'")} } }
        ${kw('else')}      { http.${type_('Response')}{ status_code: ${num('404')}, body: ${str("'Not found\\n'")} } }
    }
}

${kw('fn')} ${fn_('main')}() {
    ${kw('mut')} s := http.${type_('Server')}{ handler: ${type_('Handler')}{} }
    s.${fn_('listen_and_serve')}()
}`,
  },
]

import { ref, watch, nextTick, onMounted } from 'vue'

const activeTab = ref(0)
const copied = ref(false)
const panelEls = ref<HTMLElement[]>([])
const panelsHeight = ref('0px')

function updateHeight() {
  const el = panelEls.value[activeTab.value]
  if (el) panelsHeight.value = el.scrollHeight + 'px'
}

onMounted(() => nextTick(updateHeight))
watch(activeTab, () => nextTick(updateHeight))

function plainText(html: string) {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent ?? ''
}

async function copyCode() {
  await navigator.clipboard.writeText(plainText(tabs[activeTab.value].html))
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
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

/* ── chrome right ── */
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

/* ── code body ── */
.code-panels {
  position: relative;
  overflow: hidden;
  transition: height 0.25s ease;
}

.code-panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px;
  visibility: hidden;
  pointer-events: none;
  overflow-x: auto;
}

.code-panel.active {
  position: relative;
  visibility: visible;
  pointer-events: auto;
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

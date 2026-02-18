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

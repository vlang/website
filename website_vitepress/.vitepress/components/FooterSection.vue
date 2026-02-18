<template>
  <footer class="v-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="/img/v-logo.png" alt="V logo" class="footer-logo" />
        <p class="footer-tagline">
          Simple, fast, safe, compiled.<br />
          © {{ year }} V Language Contributors.
        </p>
      </div>

      <div class="footer-col">
        <h4 class="col-title">Resources</h4>
        <ul>
          <li><a href="/docs/">Documentation</a></li>
          <li><a href="https://modules.vlang.io" target="_blank" rel="noopener">Stdlib Docs</a></li>
          <li><a href="https://github.com/vlang/v/tree/master/examples" target="_blank" rel="noopener">Examples</a></li>
          <li><a href="https://github.com/vlang/v/blob/master/tutorials" target="_blank" rel="noopener">Tutorials</a></li>
          <li><a href="https://vpm.vlang.io" target="_blank" rel="noopener">vpm</a></li>
          <li><a href="https://play.vlang.io" target="_blank" rel="noopener">Playground</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="col-title">Community</h4>
        <ul>
          <li><a href="https://github.com/vlang/v" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://github.com/vlang/v/discussions" target="_blank" rel="noopener">Forum</a></li>
          <li><a href="https://discord.gg/vlang" target="_blank" rel="noopener">Discord</a></li>
          <li><a href="https://t.me/vlanguage" target="_blank" rel="noopener">Telegram</a></li>
          <li><a href="https://vlang.veery.blog" target="_blank" rel="noopener">Blog</a></li>
          <li><a href="https://www.youtube.com/@freedomvslavery" target="_blank" rel="noopener">YouTube</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="col-title">Support the Project</h4>
        <ul>
          <li>
            <a href="https://www.patreon.com/vlang" target="_blank" rel="noopener">
              Patreon
            </a>
          </li>
          <li>
            <a href="https://www.paypal.com/donate/?hosted_button_id=H7JDEZRNJFSE8" target="_blank" rel="noopener">
              PayPal
            </a>
          </li>
          <li>
            <a href="https://github.com/sponsors/medvednikov" target="_blank" rel="noopener">
              GitHub Sponsors
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.v-footer {
  background: var(--vp-c-bg-alt);
  border-top: 1px solid var(--vp-c-divider);
  padding: 56px 24px 40px;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 40px;
}

/* brand column */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-logo {
  width: 44px;
  height: 44px;
}

.footer-tagline {
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-3);
  margin: 0;
}

/* nav columns */
.col-title {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--vp-c-text-1);
  margin: 0 0 14px;
  border: none;
  padding: 0;
}

.footer-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-col a {
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.15s;
}

.footer-col a:hover {
  color: var(--vp-c-brand-1);
}

@media (max-width: 860px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}
</style>

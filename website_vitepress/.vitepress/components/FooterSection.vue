<template>
  <footer class="v-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="/img/v-logo.png" alt="V logo" class="footer-logo" />
        <p class="footer-tagline">
          Simple, fast, safe, compiled.<br />
          © {{ year }} V Language Contributors.
        </p>
        <div class="social-icons">
          <a href="https://twitter.com/v_language" target="_blank" rel="noopener" aria-label="Twitter / X">
            <svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
          </a>
          <a href="https://discord.gg/vlang" target="_blank" rel="noopener" aria-label="Discord">
            <svg viewBox="0 0 448 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"/></svg>
          </a>
          <a href="https://github.com/vlang/v/discussions" target="_blank" rel="noopener" aria-label="GitHub Discussions">
            <svg viewBox="0 0 16 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          </a>
          <a href="https://www.youtube.com/channel/UCLZIElNyubHOvbfudT7KS1A" target="_blank" rel="noopener" aria-label="YouTube">
            <svg viewBox="0 0 576 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
          </a>
          <a href="https://t.me/vlang_en" target="_blank" rel="noopener" aria-label="Telegram">
            <svg viewBox="0 0 496 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>
          </a>
          <a href="https://twitch.tv/v_language" target="_blank" rel="noopener" aria-label="Twitch">
            <svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/></svg>
          </a>
        </div>
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

.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 4px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: var(--vp-c-text-3);
  transition: color 0.15s;
}

.social-icons a:hover {
  color: var(--vp-c-brand-1);
}

.social-icons svg {
  width: 18px;
  height: 18px;
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

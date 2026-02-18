<template>
  <section class="features-section">
    <div class="features-inner">
      <h2 class="section-title">Why V?</h2>
      <p class="section-sub">
        A modern language with a tiny footprint and big ambitions.
      </p>

      <div class="features-grid">
        <div v-for="f in features" :key="f.title" class="feature-card">
          <div class="feature-icon" aria-hidden="true">{{ f.icon }}</div>
          <h3 class="feature-title">{{ f.title }}</h3>
          <p class="feature-desc">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '⚡',
    title: 'Fast Compilation',
    desc: 'V compiles between ~110k and 1.2 million lines of code per second per CPU core. Compiles itself in 0.15–0.6 seconds.',
  },
  {
    icon: '🔒',
    title: 'Safety',
    desc: 'No null, no global variables, no undefined behaviour, immutability by default. V prevents entire classes of bugs at compile time.',
  },
  {
    icon: '🚀',
    title: 'Performance',
    desc: 'As fast as C. V compiles to human-readable C and can use any C compiler as a backend including GCC, Clang, and MSVC.',
  },
  {
    icon: '📖',
    title: 'Simple Language',
    desc: 'Learn the entire language over a weekend. If you know Go, you already know ~80% of V. Simple, readable, maintainable code.',
  },
  {
    icon: '📦',
    title: 'Zero Dependencies',
    desc: 'The V compiler is only 400 KB with zero dependencies. No LLVM, no libstdc++. Install in seconds from anywhere.',
  },
  {
    icon: '🔄',
    title: 'C/C++ Translation',
    desc: 'Translate entire C/C++ projects to V automatically. The C2V tool can even compile the DOOM source code to V.',
  },
  {
    icon: '🔥',
    title: 'Hot Code Reloading',
    desc: 'Change code while the program is running, without restarting it. No lost state. Perfect for long-running GUI apps.',
  },
  {
    icon: '🗄️',
    title: 'Built-in ORM',
    desc: 'A built-in ORM with a clean SQL-like syntax. Works with SQLite, PostgreSQL, MySQL, and MSSQL out of the box.',
  },
  {
    icon: '🌐',
    title: 'Built-in Web Framework',
    desc: '`veb` is a fast, simple, and easy-to-use web framework included in the standard library. No external packages needed.',
  },
]
</script>

<style scoped>
.features-section {
  padding: 80px 24px;
  background: var(--vp-c-bg);
}

.features-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
  border: none;
  padding: 0;
}

.section-sub {
  text-align: center;
  font-size: 16px;
  color: var(--vp-c-text-3);
  margin: 0 0 48px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 28px 24px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 20px rgba(64, 120, 192, 0.12);
}

.feature-icon {
  font-size: 28px;
  margin-bottom: 14px;
}

.feature-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 10px;
  border: none;
  padding: 0;
}

.feature-desc {
  font-size: 14px;
  line-height: 1.65;
  color: var(--vp-c-text-2);
  margin: 0;
}

@media (max-width: 900px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 26px;
  }
}
</style>

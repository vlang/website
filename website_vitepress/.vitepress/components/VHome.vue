<template>
  <div class="v-home">
    <HeroSection />
    <InstallSection />
    <FeaturesGrid />
    <NewsSection />
    <TestimonialsSection />
    <SponsorsSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import InstallSection from './InstallSection.vue'
import FeaturesGrid from './FeaturesGrid.vue'
import NewsSection from './NewsSection.vue'
import TestimonialsSection from './TestimonialsSection.vue'
import SponsorsSection from './SponsorsSection.vue'
import FooterSection from './FooterSection.vue'
</script>

<style scoped>
.v-home {
  width: 100%;
  overflow-x: hidden;
}
</style>

import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'
import VHome from '../components/VHome.vue'
import HeroSection from '../components/HeroSection.vue'
import CodeCarousel from '../components/CodeCarousel.vue'
import DownloadButton from '../components/DownloadButton.vue'
import FeaturesGrid from '../components/FeaturesGrid.vue'
import InstallSection from '../components/InstallSection.vue'
import NewsSection from '../components/NewsSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import FooterSection from '../components/FooterSection.vue'
import ShowcasePage from '../components/ShowcasePage.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('VHome', VHome)
    app.component('HeroSection', HeroSection)
    app.component('CodeCarousel', CodeCarousel)
    app.component('DownloadButton', DownloadButton)
    app.component('FeaturesGrid', FeaturesGrid)
    app.component('InstallSection', InstallSection)
    app.component('NewsSection', NewsSection)
    app.component('TestimonialsSection', TestimonialsSection)
    app.component('FooterSection', FooterSection)
    app.component('ShowcasePage', ShowcasePage)
  },
} satisfies Theme

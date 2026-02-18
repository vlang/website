<template>
  <a :href="download.url" class="btn-download" target="_blank" rel="noopener">
    <svg class="dl-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-7 2h14v2H5v-2z" />
    </svg>
    {{ download.label }}
    <span class="dl-size">{{ download.size }}</span>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface DownloadInfo {
  label: string
  size: string
  url: string
}

const BASE = 'https://github.com/vlang/v/releases/latest/download/'

const OS_MAP: Record<string, DownloadInfo> = {
  mac_arm: {
    label: 'Download for macOS (Apple Silicon)',
    size: '11.4 MB',
    url: BASE + 'v_macos_arm64.zip',
  },
  mac_x86: {
    label: 'Download for macOS (Intel)',
    size: '11.5 MB',
    url: BASE + 'v_macos_x86_64.zip',
  },
  linux: {
    label: 'Download for Linux',
    size: '12.7 MB',
    url: BASE + 'v_linux.zip',
  },
  windows: {
    label: 'Download for Windows',
    size: '13.6 MB',
    url: BASE + 'v_windows.zip',
  },
  other: {
    label: 'Build from source',
    size: '',
    url: 'https://github.com/vlang/v#installing-v-from-source',
  },
}

const download = ref<DownloadInfo>(OS_MAP.other)

onMounted(() => {
  const ua = navigator.userAgent.toLowerCase()
  const platform = (navigator.platform || '').toLowerCase()

  if (/win/.test(platform) || /windows/.test(ua)) {
    download.value = OS_MAP.windows
  } else if (/mac/.test(platform) || /mac os/.test(ua)) {
    // Detect Apple Silicon via canvas API or userAgentData
    const isArm =
      /arm/.test(ua) ||
      (typeof (navigator as any).userAgentData !== 'undefined' &&
        (navigator as any).userAgentData?.platform === 'macOS' &&
        ua.includes('mac os'))
    // Fallback heuristic: M-series Macs report arm in some browsers
    download.value = isArm ? OS_MAP.mac_arm : OS_MAP.mac_x86
  } else if (/linux/.test(platform) || /linux/.test(ua)) {
    download.value = OS_MAP.linux
  }
})
</script>

<style scoped>
.btn-download {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.1s;
  white-space: nowrap;
}

.btn-download:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.btn-download:active {
  transform: translateY(0);
}

.dl-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
  flex-shrink: 0;
}

.dl-size {
  font-size: 12px;
  opacity: 0.75;
  margin-left: 2px;
}
</style>

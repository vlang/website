import { createContentLoader } from 'vitepress'

export interface Release {
  version: string
  date: string
  url: string
}

declare const data: Release[]
export { data }

export default {
  async load(): Promise<Release[]> {
    const res = await fetch('https://api.github.com/repos/vlang/v/releases?per_page=100')
    if (!res.ok) {
      console.warn('Failed to fetch V releases from GitHub API')
      return []
    }
    const releases: any[] = await res.json()

    return releases
      .filter((r) => !r.tag_name.startsWith('weekly.') && !r.draft && !r.prerelease)
      .map((r) => {
        const d = new Date(r.published_at)
        const date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        const tag = r.tag_name  // e.g. "0.5" or "0.4.12"
        const version = tag.startsWith('v') || tag.startsWith('V')
          ? `v${tag.replace(/^[vV]/, '')}`
          : `v${tag}`
        return {
          version,
          date,
          url: r.html_url,
        }
      })
  },
}

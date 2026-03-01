import { useData } from 'vitepress'
import { getTranslations, type SiteTranslations } from '../i18n/translations'

export function useTranslations(): SiteTranslations {
  const { lang } = useData()
  return getTranslations(lang.value)
}

import unifiedTranslations from './locales/locales.json'

function transformTranslations(source: any) {
  const ru: any = {}
  const en: any = {}

  function walk(node: any, targetRu: any, targetEn: any) {
    for (const key in node) {
      if (key === '__comment') {
        continue
      }

      const val = node[key]

      if (val && typeof val === 'object') {
        if ('ru' in val || 'en' in val) {
          if ('ru' in val) targetRu[key] = val.ru
          if ('en' in val) targetEn[key] = val.en
        } else {
          targetRu[key] = {}
          targetEn[key] = {}
          walk(val, targetRu[key], targetEn[key])
        }
      } else {
        targetRu[key] = val
        targetEn[key] = val
      }
    }
  }

  walk(source, ru, en)

  return { ru, en }
}

const messages = transformTranslations(unifiedTranslations)

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages,
}))

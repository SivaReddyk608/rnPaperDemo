import I18n from 'i18n-js'

import * as locales from '../locales'

I18n.fallbacks = true
// Use de or en
I18n.locale = 'de'

// Load translations
Object.keys(locales).forEach((locale) => {
  I18n.translations[locale] = locales[locale]
})

export default I18n
// i18n.js
import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'

const userLanguage = (navigator.language || navigator.userLanguage).substring(0, 2)

const initI18n = i18n
  .use(HttpBackend)
  .init({
    lng: userLanguage,
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  })

export default async function getI18n() {
  await initI18n
  return i18n
}

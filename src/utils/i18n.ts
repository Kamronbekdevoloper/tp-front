import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import lankr from "../locales/kr.json"
import lanru from "../locales/ru.json"
import lanuz from "../locales/uz.json"

const resources = {
	uz: {
		translation: lanuz,
	},
	ru: {
		translation: lanru,
	},
	kr: {
		translation: lankr,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: "uz",
	interpolation: {
		escapeValue: false,
	},
})

export default i18n

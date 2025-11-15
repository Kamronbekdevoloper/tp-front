import { Globe } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageSelector = ({ customClass }: { customClass?: string }) => {
	const [show, setShow] = useState(false)
	const [lang, setLang] = useState("uz")
	const { i18n } = useTranslation()

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
		setLang(lng)
		setShow(false)
	}

	return (
		<div className={`${customClass}`}>
			<button
				onClick={() => setShow(!show)}
				className="flex items-center gap-2 px-2  bg-white dark:bg-gray-800 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
			>
				<Globe className="w-[1.2rem] h-[1.2rem]" />
				<span className="uppercase">{lang}</span>
			</button>

			{show && (
				<div className="absolute right-30 mt-2 w-15 bg-white dark:bg-gray-800 border rounded-lg shadow-md z-50">
					{["uz", "ru", "kr"].map((lng) => (
						<button
							key={lng}
							onClick={() => changeLanguage(lng)}
							disabled={i18n.language === lng}
							className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
								i18n.language === lng
									? "opacity-60 cursor-not-allowed"
									: "cursor-pointer"
							}`}
						>
							{lng.toUpperCase()}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

export default LanguageSelector

import { useTranslation } from "react-i18next"

const Hi = () => {
	const { t } = useTranslation()
	return <div>{t("title.mainTitle")}</div>
}
export default Hi

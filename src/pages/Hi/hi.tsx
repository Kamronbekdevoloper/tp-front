import { useTranslation } from "react-i18next"

const Hi = ({ customClass }: { customClass?: string }) => {
	const { t } = useTranslation()
	return <div className={`${customClass}`}>{t("title.mainTitle")}</div>
}
export default Hi

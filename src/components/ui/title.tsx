import { useTranslation } from "react-i18next";

function Title({
  title,
  titleBoxClass,
  titleClass,
}: {
  title?: string;
  titleBoxClass?: string;
  titleClass?: string;
}) {
  const { t } = useTranslation();
  return (
    <div className={`${titleBoxClass}`}>
      <span
        className={`text-[24px] font-semibold  md:text-[28px]   ${titleClass}`}
      >
        {t(`${title}`)}
      </span>
    </div>
  );
}

function CardTitle({
  title,
  titleClass,
}: {
  title?: string;
  titleClass?: string;
}) {
  const { t } = useTranslation();

  return (
    <div>
      <span className={`text-[16px] font-bold ${titleClass}`}>
        {t(`${title}`)}
      </span>
    </div>
  );
}
function CardSubTitle({
  title,
  titleClass,
}: {
  title?: string;
  titleClass?: string;
}) {
  const { t } = useTranslation();

  return (
    <div>
      <span className={`text-[14px] font-medium ${titleClass}`}>
        {t(`${title}`)}
      </span>
    </div>
  );
}

export { Title, CardSubTitle, CardTitle };

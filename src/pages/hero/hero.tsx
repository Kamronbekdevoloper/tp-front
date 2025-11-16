import { useTranslation } from "react-i18next";

const Hero = ({ customClass }: { customClass?: string }) => {
  const { t } = useTranslation();
  return (
    <div className={`${customClass}`}>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div className="flex justify-center object-contain   ">
            <img src="#" alt="heroImage" />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center ">
            <h1>{t("title.hero_Title")}</h1>
            <span>{t("subTitle.hero_Subtitle")}</span>
            <div className="w-full flex flex-col ">
              <button type="button" className="border-2">
                salom
              </button>
              <button type="button" className="border-2">
                salom
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

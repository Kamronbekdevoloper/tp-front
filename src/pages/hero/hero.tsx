import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { useTranslation } from "react-i18next";
import hero from "@/assets/image/hero/heroSection.svg";
import ImageComponent from "@/components/ui/image-component";

const Hero = ({ customClass }: { customClass?: string }) => {
  const { t } = useTranslation();
  return (
    <div className={` flex  items-center justify-center ${customClass}`}>
      <div className="flex flex-col items-center justify-between  md:flex-row  ">
        <div className="w-full md:w-[50%] md:order-2">
          <div className="flex justify-center items-center">
            <ImageComponent
              image={hero}
              imageClass="xs:w-[500px] md:w-[600px]  "
            />
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-2 md:order-1 items-center justify-center md:items-start md:justify-start">
          <div className="flex items-center justify-center md:justify-end-end md:items-end">
            <Title title="title.hero_Title" />
          </div>
          <span className="text-[18px] font-medium xs:font-semibold">
            {t("subTitle.hero_Subtitle")}
          </span>
          <div className="w-full flex flex-col md:flex-row  items-center md:items-start justify-center md:justify-start gap-4  ">
            <Button variant="default" className="w-[80%] md:w-[20%] ">
              salom
            </Button>
            <Button variant="secondary" className="w-[80%] md:w-[20%] ">
              secondary
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

import hero from "@/assets/image/hero/heroSection.svg";
import Card from "@/components/ui/card";

const cardData = [
  {
    img: hero,
    title: "top 100 fellar",
    subtitle: "to do fellar 100ta",
  },
  {
    img: hero,
    title: "top 100 ot",
    subtitle: "eng kerakli ega 100ta ot",
  },
  {
    img: hero,
    title: "Ranglar",
    subtitle: "100ta eng kerakli ranglar",
  },
  {
    img: hero,
    title: "Hayvonlar",
    subtitle: "yovoyi hayvon nomlari barchasi",
  },
  {
    img: hero,
    title: "Qushlar",
    subtitle: "100ta qushlar nomi",
  },
  {
    img: hero,
    title: "Universitetlar",
    subtitle: "top 100 universitetlar ro'yhati",
  },
];
let count = 0;
export default function Cards() {
  return (
    <div className="flex items-center justify-center  gap-4 flex-wrap ">
      {cardData?.map((item) => (
        <Card
          title={item.title}
          subtitle={item.subtitle}
          image={item.img}
          key={count++}
        />
      ))}
    </div>
  );
}

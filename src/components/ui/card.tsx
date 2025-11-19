import React from "react";
import { CardSubTitle, CardTitle } from "./title";

export default function Card({
  title,
  subtitle,
  image,
}: {
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <div className=" w-[330px] xs:w-[400px] flex items-center justify-start gap-4 p-8 border-2 border-red-50 rounded-2xl ">
      <div className=" object-contain border-2">
        <img src={image} alt="carx-icon" className="w-12 h-12" />
      </div>
      <div className="flex flex-col gap-1 items-start justify-center">
        <CardTitle title={title} />
        <CardSubTitle title={subtitle} />
      </div>
    </div>
  );
}

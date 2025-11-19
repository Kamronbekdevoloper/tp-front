import { lazy } from "react";

const Hero = lazy(() => import("../../hero/hero"));
const Card = lazy(() => import("../../cards/cards"));

export default function home() {
  return (
    <div className="flex flex-col  gap-10">
      <Hero />
      <Card />
    </div>
  );
}

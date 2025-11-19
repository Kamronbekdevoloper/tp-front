import { useEffect, useState } from "react";
import MobileNav from "../navbar/mobileNav";
import DesktopNav from "../navbar/desktopNav";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleChangeSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleChangeSize);
    return () => {
      window.removeEventListener("resize", handleChangeSize);
    };
  }, []);
  return <div>{width <= 768 ? <MobileNav /> : <DesktopNav />}</div>;
}

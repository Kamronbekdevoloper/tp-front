import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../layout/header/assets/mode-toggle";
import LanguageSelector from "../layout/header/assets/localization";
import Navlinks from "./navlinks";

function MobileNav() {
  const [show, setshow] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold ">TopWords</span>
      <button type="button" onClick={() => setshow(!show)} className="z-100">
        {!show ? <Menu /> : <X />}
      </button>
      {show ? (
        <div
          className="absolute z-50 top-0 right-0 w-full h-full flex flex-col items-center gap-4 pt-15 px-5 bg-background border-t-2 rounded-t-4xl  opacity-100 translate-y-0
    transition-all duration-300 ease-out "
        >
          <Navlinks linkClass="flex flex-col gap-3" />
          <div className="flex gap-4">
            <LanguageSelector />
            <ModeToggle />
          </div>
        </div>
      ) : (
        <div
          className="
    absolute z-50 top-0 right-0 w-full h-full 
    flex flex-col items-center gap-4 pt-15 px-5 
    bg-background border-2 rounded-4xl
    opacity-0 -translate-y-10
    transition-all duration-300 ease-out
  "
        ></div>
      )}
    </div>
  );
}

export default MobileNav;

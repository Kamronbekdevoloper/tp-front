import LanguageSelector from "../header/assets/localization";
import { ModeToggle } from "../header/assets/mode-toggle";
import Navlinks from "./navlinks";

export default function DesktopNav() {
  return (
    <div className="flex items-center justify-between   ">
      <span className="text-2xl font-bold ">TopWords</span>
      <Navlinks linkClass="flex gap-4 items-center" />
      <div className="flex gap-4">
        <LanguageSelector />
        <ModeToggle />
      </div>
    </div>
  );
}

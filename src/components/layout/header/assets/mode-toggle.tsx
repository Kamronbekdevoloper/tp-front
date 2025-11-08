import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(theme === "dark");

  useEffect(() => {
    setShow(theme === "dark");
  }, [theme]);

  function toggleTheme() {
    const newTheme = show ? "light" : "dark";
    setTheme(newTheme);
    setShow(!show);
  }

  return (
    <button onClick={toggleTheme} className="align-middle">
      {show ? (
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100  rotate-0  transition-all  dark:-rotate-80" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]  rotate-90 transition-all dark:scale-100 dark:rotate-0 " />
      )}
    </button>
  );
}

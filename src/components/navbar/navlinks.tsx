import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const linkArr = [
  {
    link: "home",
    path: "/",
  },
  {
    link: "files",
    path: "/files",
  },
  {
    link: "courses",
    path: "/courses",
  },
  {
    link: "interests",
    path: "/interests",
  },
  {
    link: "about",
    path: "/about",
  },
];

export default function Navlinks({
  boxClass,
  linkClass,
}: {
  boxClass?: string;
  linkClass?: string;
}) {
  const { t } = useTranslation();
  return (
    <div className={`${boxClass}`}>
      <ul className={`${linkClass}`}>
        {linkArr.map((item, index) => (
          <NavLink
            to={item.path}
            key={++index}
            className="text-[16px] font-bold lg:text-[18px] md:font-semibold  "
          >
            {t(`links.${item.link}`)}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

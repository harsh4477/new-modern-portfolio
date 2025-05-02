import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "Home", path: "/", Icon: HiHome },
  { name: "About", path: "/about", Icon: HiUser },
  { name: "Services", path: "/services", Icon: HiRectangleGroup },
  { name: "Work", path: "/work", Icon: HiViewColumns },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const updateItemWidth = () => {
      const nav = document.querySelector(".navigation ul");
      if (nav) {
        setItemWidth(nav.clientWidth / navData.length);
      }
    };
    const index = sessionStorage.getItem("activeIndex");
    if (index) {
      setActiveIndex(index);
    }
    updateItemWidth(); // Set width initially
    window.addEventListener("resize", updateItemWidth); // Update width on resize

    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  const handleClick = (index) => {
    sessionStorage.setItem("activeIndex", index);
    setActiveIndex(index);
  };

  return (
    <nav className="navigation flex flex-col items-center xl:justify-center gap-y-4 sticky h-max bottom-0 xl:left-[2%] z-10 top-0 w-full xl:w-16 xl:max-w-md xl:h-dvh pt-10">
      <div className="hidden xl:flex w-full xl:flex-col items-center justify-between xl:justify-center px-4 md:px-40 xl:px-0 md:py-3 h-[65px] xl:h-max bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            key={i}
            className={`${
              link.path == pathname && "text-accent"
            } relative flex items-center p-4 group hover:text-accent transition-all duration-300`}
            href={link.path}
            onClick={() => handleClick(i)}
          >
            <div
              role="tooltip"
              className="absolute pl-[66px] left-0 hidden xl:group-hover:flex transi duration-300"
            >
              <div className="bg-[#1a1a1a] relative flex text-white items-center p-2 rounded-[3px]">
                <div className="text-[13px] leading-none font-semibold capitalize w-20 text-center">
                  {link.name}
                </div>
                <div
                  className="border-solid border-r-[#1a1a1a] border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2"
                  aria-hidden
                />
              </div>
            </div>
            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
      <div className="relative w-full h-[70px] bg-[#1a1a1a] flex xl:hidden justify-center items-center rounded-lg">
        <ul className="grid grid-cols-5 w-full">
          {navData.map((link, i) => (
            <li key={i} className={`relative list-none w-[70px] h-[70px] z-10`}>
              <Link
                href={link.path}
                className={`relative flex items-center justify-center flex-col w-full h-full text-center font-medium`}
                onClick={() => handleClick(i)}
              >
                <span
                  className={`relative flex text-2xl text-center duration-500  text-white ${
                    i == activeIndex ? "-translate-y-9" : ""
                  }`}
                >
                  <link.Icon aria-hidden />
                </span>
                <span
                  className={`absolute text-white text-sm duration-500 w-max ${
                    i == activeIndex
                      ? "translate-y-2.5 flex opacity-100"
                      : "opacity-0 hidden"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
          <div
            className="indicator absolute -top-1/2 w-[70px] h-[70px] bg-[#f13024] rounded-full border-[6px] border-black duration-500"
            style={{
              transform: `translateX(${activeIndex * itemWidth}px)`,
            }}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

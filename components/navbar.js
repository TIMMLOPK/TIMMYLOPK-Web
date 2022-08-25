import Tooltip from "./tooltip";
import { AiOutlineFolder } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FcSettings } from "react-icons/fc";
import { BsArrowBarRight } from "react-icons/bs";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function scrollTo(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
  });
}

const Navbar = ({ show, inView }) => {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("about");
  const [showNav, setShowNav] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!inView) {
      setActive("about")
    } else {
      setActive(inView);
    }
    const nav = document.getElementById("navbar");
    if (nav) {
      nav.addEventListener("mouseenter", () => {
        setShowNav(true);
      });
    }
    setShowNav(show);
    return () => {
      if (nav) {
        nav.removeEventListener("mouseenter", () => {
          setShowNav(true);
        });
      }
    };
  }, [show, inView]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed top-1/3 bottom-1/3 ${showNav ? "right-3" : "right-[-30px]"
        } z-10 transition-all duration-200 ease-in-out`}
      id="navbar"
    >
      <div className="h-[340px] w-10 bg-black text-white rounded-md shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-80 p-1">
        <div className="mt-6 flex flex-col items-center">
          <div>
            <Tooltip message="About">
              <button
                onClick={() => {
                  scrollTo("about");
                  setActive("about");
                }}
                className={`${active === "about" ? "bg-yellow-500" : "bg-transparent"
                  } p-2 rounded-md`}
              >
                <SiAboutdotme />
              </button>
            </Tooltip>
          </div>
          <div className="mt-8">
            <Tooltip message="Language & Skills">
              <button
                onClick={() => {
                  scrollTo("lang");
                  setActive("lang");
                }}
                className={`${active === "lang" ? "bg-yellow-500" : "bg-transparent"
                  } p-2 rounded-md`}
              >
                <FcSettings />
              </button>
            </Tooltip>
          </div>

          <div className="mt-8">
            <Tooltip message="Projects">
              <button
                onClick={() => {
                  scrollTo("projects");
                  setActive("projects");
                }}
                className={`${active === "projects" ? "bg-yellow-500" : "bg-transparent"
                  } p-2 rounded-md`}
              >
                <AiOutlineFolder />
              </button>
            </Tooltip>
          </div>
          <div className="mt-8">
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
              className="p-2 rounded-md"
            >
              {theme === "dark" ? <FiMoon /> : <FiSun />}
            </button>
          </div>
          <div className="mt-8">
            <button
              onClick={() => (showNav ? setShowNav(false) : setShowNav(true))}
              className="p-2 rounded-md"
            >
              <BsArrowBarRight />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

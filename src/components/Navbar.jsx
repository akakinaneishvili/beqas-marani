import { useEffect, useState } from "react";
import { API } from "../config";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

function Navbar() {
  const [menu, setmenu] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navbarMenu = async () => {
      const response = await fetch(`${API}/navigation`);
      const data = await response.json();
      setmenu(data);
    };
    navbarMenu();
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 via-black/30 to-transparent">
      <div className="max-w-[1800px] w-full h-24 min-[1344px]:h-28 mx-auto px-4 sm:px-8 flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <NavLink
            to="/"
            className="flex items-center h-12 min-[1344px]:h-16 gap-3 z-50"
          >
            <img src={logo} alt="Logo" className="h-full object-contain" />
            <span className="font-TITLE text-[#F5F0E8] text-lg min-[1344px]:text-xl font-medium tracking-wider whitespace-nowrap">
              Beka&apos;s Marani
            </span>
          </NavLink>
        </div>

        <ul className="hidden min-[1344px]:flex flex-auto justify-center items-center gap-10 font-TITLE">
          {menu.map((item) => (
            <li key={item.id} className="h-full flex items-center">
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  relative font-medium tracking-wider transition-all duration-300 py-2
                  hover:text-amber-400 text-base
                  ${
                    isActive
                      ? "text-amber-400 after:w-full"
                      : "text-Gold after:w-0"
                  }
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px 
                  after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full
                `}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex justify-end items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="min-[1344px]:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-full bg-Gold transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-Gold transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-Gold transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`
        fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 w-full h-screen transition-all duration-500 z-40 min-[1344px]:hidden
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }
      `}
      >
        <ul className="flex flex-col items-center gap-8 font-TITLE">
          {menu.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  text-2xl tracking-widest transition-colors duration-300
                  ${isActive ? "text-amber-400" : "text-Gold"}
                `}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

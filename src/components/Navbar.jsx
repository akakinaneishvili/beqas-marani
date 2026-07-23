import { useEffect, useState } from "react";
import { API } from "../config";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

function Navbar() {
  const [menu, setmenu] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navbarMenu = async () => {
      const rspons = await fetch(`${API}/navigation`);
      const data = await rspons.json();
      setmenu(data);
    };
    navbarMenu();
  }, []);

  return (
    <nav className="bg-black text-Gold border-b border-Gold/20 sticky top-0 z-50 ">
      <div className="max-w-[1800px] w-full h-20 md:h-24 mx-auto px-4 sm:px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center h-full py-2 z-50 gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-4/5 md:h-full object-contain"
          />
          <span className="font-DM text-[#F5F0E8] text-[16px] sm:text-[18px] md:text-[20px] font-medium tracking-[0.04em] whitespace-nowrap">
            Beka&apos;s Marani
          </span>
        </NavLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-full bg-Gold transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`h-0.5 w-full bg-Gold transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-full bg-Gold transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        <ul
          className={`
          flex items-center font-BPGB
          
        
          fixed inset-0 bg-black flex-col justify-center gap-8 w-full h-screen transition-all duration-300 z-40
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
          
      
          md:static md:flex-row md:w-auto md:h-full md:opacity-100 md:visible md:pointer-events-auto
          md:gap-4 lg:gap-8
        `}
        >
          {menu.map((item) => (
            <li key={item.id} className="h-auto md:h-full flex items-center">
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  relative font-medium tracking-wide transition-all duration-300 py-2
                  hover:text-amber-400
                  
                  
                  text-xl md:text-sm lg:text-lg
                  
                  ${isActive ? "text-amber-400 after:w-full" : "text-Gold after:w-0"}
                  after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full
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

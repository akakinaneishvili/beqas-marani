import { useEffect, useState } from "react";
import { API } from "../config";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

function Navbar() {
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    const navbarMenu = async () => {
  
        const rspons = await fetch(`${API}/navigation`);
        const data = await rspons.json();
        setmenu(data);
    
    };
    navbarMenu();
  }, []);

  return (
    <nav className="bg-black text-Gold border-b border-Gold/20 sticky top-0 z-50">
      <div className="max-w-[1800px] w-full h-24 mx-auto px-6 flex items-center justify-between">
        
     
        <NavLink to="/" className="flex items-center h-full py-2">
          <img src={logo} alt="Logo" className="h-full object-contain" />
           <span className="font-DM text-[#F5F0E8] text-[20px] font-medium tracking-[0.04em]">
                  Beka&apos;s Marani
                </span>
        </NavLink>

      
        <ul className="flex items-center gap-8 h-full">
          {menu.map((item) => (
            <li key={item.id} className=" font-BPGB h-full flex items-center">
              <NavLink 
                to={item.path}
                className=   {({ isActive }) => `
                  relative text-lg font-medium tracking-wide transition-all duration-300 py-2
                  hover:text-amber-400
                  ${isActive ? 'text-amber-400 after:w-full' : 'text-Gold after:w-0'}
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
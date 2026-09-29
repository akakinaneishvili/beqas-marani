import { useEffect, useState } from "react";

import { API } from "../config";
import { NavLink } from "react-router-dom";

function MenuCard() {
  

  const [info, setinfo] = useState([]);

  useEffect(() => {
    const infomenu = async () => {
      const respon = await fetch(`${API}/MenuCard`);
      const data = await respon.json();
      setinfo(data);
    };
    infomenu();
  }, []);

  return (
    <section className="bg-black p-4 flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full max-w-5xl">

        {info.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className="group relative overflow-hidden aspect-square cursor-pointer block"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white z-10">
            <div className="w-6 h-0.5 bg-Gold mb-3 transition-all duration-700 ease-in-out group-hover:w-16" />
              <h3 className="text-xl sm:text-2xl font-TITLE tracking-wide">
                {item.title}
              </h3>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default MenuCard;

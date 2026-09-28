import { useEffect, useState } from "react";
import { API } from "../config";

function Card({ activeFilter = "ყველა ღვინო" }) {
  const [wine, setWine] = useState([]);

  useEffect(() => {
    const fetchWines = async () => {
      const response = await fetch(`${API}/wine`);

      const data = await response.json();
      setWine(data);
    };

    fetchWines();
  }, []);

  const filteredWines = wine.filter((item) => {
    if (activeFilter === "ყველა ღვინო") return true;

    return item.color === activeFilter;
  });

  return (
    <div className="w-full bg-BG pb-16 px-4">
      
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
        {filteredWines.map((item) => (
          <div
            key={item.id}
           
            className="w-full max-w-[380px] lg:max-w-[400px] group flex flex-col bg-BG border border-white/5 hover:border-Gold rounded-sm p-6 transition-all duration-300 hover:bg-[#1a1a1a] shadow-2xl"
          >
            <div className="relative w-full h-72 md:h-80 mb-6 overflow-hidden rounded-sm bg-black">
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-full object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              {item.badge && (
                <span className="absolute top-4 right-4 text-[10px] md:text-xs font-bold tracking-[0.2em] px-3 py-1.5 bg-red-900/80 text-white uppercase backdrop-blur-md rounded-sm">
                  {item.badge}
                </span>
              )}
            </div>

            <div className="w-6 h-0.5 bg-Gold mb-3 transition-all duration-700 ease-in-out group-hover:w-16" />

            <h3 className="text-2xl text-Gold sm:text-3xl font-TITLE tracking-wide mb-4">
              {item.name}
            </h3>

            <p className="text-[#888888] text-sm md:text-base leading-relaxed grow">
              {item.description}
            </p>
          </div>
        ))}

        {filteredWines.length === 0 && (
          <div className="w-full text-center py-10">
            <p className="text-[#666666] font-TITLE text-lg">
              ამ კატეგორიაში ღვინო ვერ მოიძებნა.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

import { useEffect, useState } from "react";
import { API } from "../config";

function Card() {
  const [wine, setWine] = useState([]);

  useEffect(() => {
    const wineMenu = async () => {
     
        const response = await fetch(`${API}/wine`);
        const data = await response.json();
        setWine(data);
    };

    wineMenu();
  }, []);

  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wine.map((item) => (
          <div 
            key={item.id} 
            className="group relative flex flex-col rounded-xl border border-white/10 bg-zinc-950/40 backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 hover:border-Gold/40 hover:-translate-y-1 shadow-xl"
          >
           
            <div className="w-full h-64 overflow-hidden rounded-lg mb-6 bg-zinc-900">
              <img 
                src={item.photo} 
                alt={item.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                
              />
            </div>

            <h3 className="font-DM text-Gold text-xl sm:text-2xl font-bold mb-3 tracking-wide transition-colors duration-300 group-hover:text-amber-400">
              {item.name}
            </h3>

           
            <div className="w-12 h-px bg-Gold/30 mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-Gold" />

          
            <p className="font-BPGB text-textMuted text-sm sm:text-base leading-relaxed tracking-wide opacity-90 grow">
              {item.description}
            </p>

        
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-Gold/0 to-transparent transition-all duration-500 group-hover:via-Gold/50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
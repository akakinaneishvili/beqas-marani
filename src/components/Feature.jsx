import React, { useEffect, useState } from "react";
import { API } from "../config";

function Feature() {
  // const [, setFeaturesmenu]= useState([]);
  const [info, setinfo] = useState([]);

  useEffect(() => {
    const featuresmenu = async () => {
      const respon = await fetch(`${API}/features`);
      const data = await respon.json();
      setinfo(data);
    };
    featuresmenu();
  }, []);

  const leftFeatures = info.filter((item) => item.side === "left");
  const rightFeatures = info.filter((item) => item.side === "right");

  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <p className=" text-xs sm:text-sm tracking-[0.3em] uppercase mb-7">
          ჩვენი უპირატესობები
        </p>

        <h2 className="font-TITLE text-3xl sm:text-5xl md:text-6xl text-Gold tracking-wide mb-4">
          ყველაფერი საუკეთესო დასვენებისა
        </h2>

        <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-[#C5A880] to-transparent opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="space-y-12 text-center lg:text-right">
          {leftFeatures.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-center justify-center lg:justify-end gap-2">
                <h3 className="text-Gold text-sm tracking-[0.2em] font-TITLE uppercase">
                  {item.title}
                </h3>
                <span className="hidden lg:inline-block w-4 h-[1px] bg-Gold/50"></span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto lg:ml-auto lg:mr-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <img src="/beqasmarani.png" className="h-[300px]" />

        <div className="space-y-12 text-center lg:text-left">
          {rightFeatures.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="hidden lg:inline-block w-4 h-[1px] bg-Gold/50"></span>
                <h3 className="text-Gold text-sm tracking-[0.2em] font-TITLE uppercase">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto lg:mr-auto lg:ml-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;

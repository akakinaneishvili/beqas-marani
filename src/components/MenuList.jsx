import { useEffect, useState } from "react";
import { API } from "../config";

function MenuList() {
  const [menu, setMenu] = useState([]);


  useEffect(() => {
    const fetchMenu = async () => {
        const response = await fetch(`${API}/menu`);
      
        const data = await response.json();
        setMenu(data);
    }

    fetchMenu();
  }, []);

 

  return (
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
      {menu.map((category) => (
        <div key={category.id} className="flex flex-col gap-6">
          
      
          <div className="flex flex-col gap-4">
            <h3 className="font-DM text-Gold text-xl border-b border-Gold/30 pb-2 tracking-wide uppercase">
              {category.category}
            </h3>
            
          
          </div>

      
          <div className="flex flex-col gap-5">
            {category.items.map((item) => (
              <div key={item.id} className="flex flex-col gap-1">
                <h4 className="font-BPGB text-white text-base font-medium">
                  {item.name}
                </h4>
                <p className="font-BPGB text-textMuted text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default MenuList;
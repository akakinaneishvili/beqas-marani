import { useEffect, useState } from "react";
import { API } from "../config";
import { Link } from "react-router-dom";

function RoomCard() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch(`${API}/hotel`);

      const data = await response.json();
      setRooms(data);
    };

    fetchRooms();
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="group flex flex-col rounded-xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-Gold/30 hover:-translate-y-1 shadow-2xl"
          >
            <div className="w-full h-72 overflow-hidden relative">
              <img
                src={room.photo}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md border border-Gold/30 text-Gold px-4 py-1.5 rounded-full font-BPGB text-xs font-semibold tracking-wider">
                {room.price} / ღამე
              </div>
            </div>

            <div className="p-6 flex flex-col grow justify-between">
              <div>
                <h3 className="font-DM text-Gold  text-xl sm:text-2xl font-bold mb-3 tracking-wide transition-colors duration-300 group-hover:text-Gold">
                  {room.name}
                </h3>

                <p className="font-BPGB text-textMuted text-xs sm:text-sm leading-relaxed mb-6">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {room.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 border border-white/10 text-zinc-300 px-3 py-1 rounded-sm text-[10px] sm:text-xs font-BPGB tracking-wide"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full py-3 text-center border border-Gold text-Gold font-BPGB text-xs tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-Gold hover:text-black font-semibold"
              >
                დეტალების გასაგებად დაგვიკავშირდით
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RoomCard;

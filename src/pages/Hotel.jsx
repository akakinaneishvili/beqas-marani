import RoomCard from "../components/RoomCard";
import sastumro from "/sastumro.png";

function Hotel() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-footer min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:h-225 py-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(10, 10, 10, 0.5) 20%, rgba(10, 10, 10, 0.7) 65%, #0A0A0A 90%), url(${sastumro})`,
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 max-w-7xl">
          <h1 className="font-TITLE text-white font-bold text-5xl md:text-7xl lg:text-8xl text-center drop-shadow-2xl">
            სადაც კომფორტი ხვდება ტრადიციას
          </h1>

          <p className="w-full max-w-2xl text-textMuted tracking-wide leading-relaxed text-lg md:text-xl lg:text-2xl mt-8 md:mt-12 drop-shadow-md">
            აღმოაჩინეთ განსაკუთრებული მზრუნველობა და გარემო, სადაც თითოეული
            დეტალი თქვენს დასვენებაზე ფიქრობს.
          </p>
        </div>
      </div>

      <div className="w-full min-h-screen bg-zinc-950 text-white pt-24 pb-16 px-4">
        <div className="w-full py-20 bg-black/30 px-4 flex flex-col items-center border-t border-Gold/10">
          <div className="text-center max-w-2xl mb-20 flex flex-col gap-2 ">
            <p className="font-BPGB text-Gold  tracking-[0.3em] mb-10">
              დაისვენეთ კახეთში
            </p>
            <h2 className="font-DM text-textMuted text-3xl sm:text-4xl font-bold">
              ჩვენი სასტუმრო
            </h2>
          </div>
        </div>
        <RoomCard />
      </div>
    </>
  );
}
export default Hotel;

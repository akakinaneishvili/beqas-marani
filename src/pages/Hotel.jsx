
import RoomCard from "../components/RoomCard";
import hotel from "/hotel.png";

function Hotel() {
 
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-footer min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:h-225 py-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{ backgroundImage: `url(${hotel})` }}
        />

        <div className="relative z-10 container-center flex flex-col items-center justify-around w-full max-w-7xl h-full min-h-100 lg:h-225 gap-8 lg:gap-0">
          <p className="font-BPGB text-Gold  tracking-[0.3em] uppercase">
            სოფელი ოჟიო · კახეთი · საქართველო
          </p>

          <h1 className="font-HF text-textMuted w-300 leading-40 text-5xl text-center ">
            სადაც კომფორტი ხვდება
            <p className=" text-Gold">ტრადიციას </p>
          </h1>

          <p className="w-full max-w-2xl font-BPGB text-white  tracking-wide leading-relaxed">
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
    <RoomCard/>
      </div>
    </>
  );
}
export default Hotel;

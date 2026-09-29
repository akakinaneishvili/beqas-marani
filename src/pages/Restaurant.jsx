import MenuList from "../components/MenuList";
import grapes from "/grapes.svg";
import restorani from "/restorani.png";

function Restaurant() {
  return (
    <>
    
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-footer min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:min-h-screen py-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(10, 10, 10, 0.5) 20%, rgba(10, 10, 10, 0.7) 65%, #0A0A0A 90%), url(${restorani})`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 max-w-7xl">
          <h1 className="font-TITLE text-white font-bold text-5xl md:text-7xl lg:text-8xl text-center drop-shadow-2xl">
            ქართული სუფრის ხელოვნება
          </h1>

          <p className="w-full max-w-2xl text-textMuted tracking-wide leading-relaxed text-lg md:text-xl lg:text-2xl mt-8 md:mt-12 drop-shadow-md">
            სადაც ქვევრის ღვინო და საუკეთესო კახური კერძები ერთმანეთს ერწყმის.
          </p>
        </div>
      </div>

      <div className="bg-BG min-h-screen text-white py-10 ">
  
        <div className="w-full py-20 bg-black/30 px-4 flex flex-col items-center border-t border-Gold/10">
          <div className="text-center max-w-2xl mb-16 flex flex-col gap-2 items-center">
            <p className="font-BPGB text-Gold tracking-[0.3em] mb-4 uppercase text-xs md:text-sm">
              საფირმო მენიუ
            </p>

            <h2 className="font-TITLE text-white text-4xl sm:text-5xl font-bold">
              კულინარიული ნობათი
            </h2>
          </div>

          <MenuList />
        </div>

        <div className="relative w-full mb-16 lg:mb-28 py-24 lg:py-40 flex items-center min-h-[600px] lg:min-h-[800px] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/restoran.png"
              alt="კახური სუფრა"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/80 to-transparent"></div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col items-start justify-center">
            <h2 className="font-TITLE text-Gold text-5xl sm:text-7xl lg:text-[100px] leading-tight mb-4 drop-shadow-lg">
              კახური სუფრა
            </h2>

            <p className="font-TITLE text-white text-2xl sm:text-3xl lg:text-4xl leading-relaxed max-w-xl drop-shadow-md">
              ტრადიცია, რომელიც
              <br className="hidden sm:block" /> გემოთი გრძელდება
            </p>
          </div>
        </div>

      


      </div>
    </>
  );
}

export default Restaurant;
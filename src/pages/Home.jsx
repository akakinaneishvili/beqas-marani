import mainBg from "/vineyard.jpg";
import grapes from "/grapes.svg";
import MenuCard from "../components/MenuCard";
import Slider from "../components/Slider";

import Feature from "../components/Feature";


function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-black">

      <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden min-h-screen py-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(10, 10, 10, 0.5) 20%, rgba(10, 10, 10, 0.7) 65%, #0A0A0A 90%), url(${mainBg})`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 max-w-7xl ">
          <p className="text-textMuted tracking-[0.3em] uppercase text-xl md:text-2xl mb-12 md:mb-20">
            სოფელი ოჟიო · კახეთი · საქართველო
          </p>

          <h1 className="font-TITLE text-white font-bold text-6xl md:text-8xl lg:text-9xl text-center">
            ბექას მარანი
          </h1>

          <p className="w-full max-w-2xl text-textMuted tracking-wide leading-relaxed text-xl md:text-2xl mt-12 md:mt-20">
            ავთენტური ქვევრის ღვინო · გასტრონომია
          </p>
        </div>
      </section>

      <section className="w-full bg-black py-12 md:py-20">
        <div className="flex justify-center mb-12">
          <h2 className="font-TITLE text-5xl md:text-7xl text-Gold text-center px-4">
            გამოცდილება მარანში
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-4 mb-16 h-12 flex items-center justify-center">
          <div className="absolute left-4 right-4 h-px bg-Gold top-1/2 -translate-y-1/2" />
          <div className="relative bg-black px-4 z-10">
            <img src={grapes} alt="Grapes" className="w-8 sm:w-auto" />
          </div>
        </div>

        <MenuCard />


      </section>

      <div className="flex flex-col items-center justify-center mb-12 text-center">

        <p className="text-white text-sm sm:text-base tracking-[0.3em] uppercase mb-3">
          გ ა ლ ე რ ე ა
        </p>


        <h2 className="font-TITLE text-Gold text-4xl sm:text-6xl md:text-7xl my-4">
          ცხოვრება ვენახში
        </h2>




        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent opacity-60"></div>
      </div>

      <section className="w-full bg-black">
        <Slider />
      </section>

     
   <Feature/>

      <footer className="w-full flex justify-center items-center py-16 md:py-28 bg-footer text-center px-6 sm:px-8">
        <p className="font-DM text-Gold leading-relaxed text-lg sm:text-xl md:text-2xl italic font-light tracking-wide max-w-4xl">
          "საქართველოში ღვინო მხოლოდ სასმელი არ არის — ეს არის დიალოგი ვაზს,
          მიწასა და ჭურჭელს შორის. ღვინის თითოეული ჩამოსხმა რვა ათასი წლის
          მეხსიერებას ატარებს."
        </p>
      </footer>
    </div>
  );
}

export default Home;
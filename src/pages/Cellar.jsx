import IMG_1 from "/9.jpg";
import Card from "../components/Card";
import { useState } from "react";
import marani from "/marani.png";
function Cellar() {
  const [activeFilter, setActiveFilter] = useState("ყველა ღვინო");
  const categories = ["ყველა ღვინო", "წითელი", "თეთრი", "ქარვისფერი"];

  return (
    <>
      <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden min-h-screen py-12 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(10, 10, 10, 0.5) 20%, rgba(10, 10, 10, 0.7) 65%, #0A0A0A 90%), url(${marani})`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-12 md:mb-20">
            <span className="w-12 md:w-16 h-px bg-Gold/60"></span>
            <p className="text-textMuted tracking-[0.3em] uppercase text-xl md:text-2xl italic">
              ქართული ტრადიციული ქვევრის ღვინოები
            </p>
            <span className="w-12 md:w-16 h-px bg-Gold/60"></span>
          </div>

          <h1 className="font-TITLE text-white font-bold text-8xl text-center">
            ბექას მარნის რჩეული კოლექცია
          </h1>

          <p className="w-full max-w-2xl text-textMuted tracking-wide leading-relaxed text-xl md:text-2xl mt-12 md:mt-20">
            აღმოაჩინეთ ოჟიოს ვენახებიდან დაწურული, ქვევრში დავარგებული
            ექსკლუზიური ღვინოების მდიდარი ასორტიმენტი.
          </p>
        </div>
      </section>

      <div className="w-full bg-BG pt-12">
        <div className="max-w-[1400px] mx-auto flex justify-center flex-wrap gap-6 md:gap-10 mb-8 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative pb-2 text-sm md:text-base font-TITLE tracking-wider transition-colors duration-300 ${
                activeFilter === category
                  ? "text-Gold"
                  : "text-[#666666] hover:text-[#aaaaaa]"
              }`}
            >
              {category}
              {activeFilter === category && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-Gold transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        <Card activeFilter={activeFilter} />
      </div>

      <div className="w-full bg-black">
        <div className="flex items-center justify-center max-w-[1400px] mx-auto py-16 px-4 sm:px-6">
          <section className="flex flex-col lg:flex-row items-stretch justify-between gap-12 w-full">
            <div className="flex flex-col justify-between w-full lg:w-5/12 xl:w-1/2">
              <div className="mb-12">
                <p className="text-Gold text-4xl sm:text-5xl font-TITLE pb-8">
                  ვენახიდან ქვევრამდე
                </p>

                <div className="text-[#888888] font-light text-sm sm:text-base leading-relaxed flex flex-col gap-6">
                  <p>
                    ჩვენი მეღვინეობა იყენებს კახური ქვევრის ტრადიციულ მეთოდს —
                    ღვინო ბუნებრივად დუღდება თიხის ჭურჭელში, მიწაში ჩაფლული,
                    სეზონური ტემპერატურის ცვლილებებთან ერთად. შედეგი: ცოცხალი,
                    ტანინური, ამბერი ღვინო, რომელსაც სხვა ტექნოლოგია ვერ
                    შექმნის.
                  </p>
                  <p>
                    რქაწითელი, საფერავი, მწვანე — ყოველი ჯიში ინახავს ოჟიოს
                    ტერუარის სიღრმეს. სადეგუსტაციო ვიზიტი შეგიძლიათ ნებისმიერ
                    სეზონში.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-auto">
                <h4 className="text-Gold font-TITLE text-xl mb-3 tracking-wide">
                  გაქვთ კითხვები?
                </h4>
                <p className="text-[#888888] text-sm leading-relaxed mb-6 max-w-md">
                  დაგვიკავშირდით და სიამოვნებით გიპასუხებთ ჩვენი ღვინოების ან
                  სადეგუსტაციო ვიზიტების შესახებ.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <button className="px-8 py-3 border border-Gold text-Gold text-xs sm:text-sm tracking-widest font-bold uppercase transition-all duration-300 hover:bg-Gold hover:text-black">
                  <a
                      href="mailto:arbolishvilimari1409@gmail.com"
                     
                    >
                      მოგვწერეთ
                    </a>
                    
                  </button>

                
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 xl:w-1/2 flex justify-end">
              <img
                src={IMG_1}
                alt="მარანი"
                className="w-full max-w-lg rounded-sm object-cover object-center shadow-2xl"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Cellar;

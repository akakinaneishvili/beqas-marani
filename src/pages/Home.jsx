import mainBg from "/home1.png";
import BGfoto from "/BGfoto.png";
import meinIMG from "/9.jpg";
import meinIMG_2 from "/10.jpg";
import BGfoto_2 from "/12.jpg";
import terasa from "/5.jpg";
import qvevri from "/qvevri.SVG";
import grapes from "/grapes.svg";
import arrow from "/arrow.svg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-footer min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:h-225 py-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{ backgroundImage: `url(${mainBg})` }}
        />

        <div className="relative z-10 flex flex-col items-center justify-around w-full max-w-7xl h-full min-h-100 lg:h-225 gap-8 lg:gap-0">
          <p className="font-BPGB text-Gold text-xs sm:text-sm tracking-[0.3em]">
            სოფელი ოჟიო · კახეთი · საქართველო
          </p>

          <h1 className="flex flex-col items-center font-DM text-Gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            <span className="text-textMuted block mb-20 ">
              ტრადიცია, გემოვნება და ქართული
            </span>

            <span className="block leading-normal">სტუმარმასპინძლობა</span>
          </h1>

          <p className="font-BPGB text-textMuted text-sm sm:text-base tracking-wide">
            ავთენტური ქვევრის ღვინო · გასტრონომია · ბუტიკ სასტუნრო
          </p>
        </div>
      </div>

      <div className="bg-black py-12 md:py-20">
        <div className="flex items-center justify-center container-center mx-auto px-4 sm:px-6">
          <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-16 md:mb-24 w-full">
            <img
              src={meinIMG}
              alt="მარანი"
              className="w-full lg:w-1/2 rounded-sm object-cover max-h-87.5 sm:max-h-112.5 lg:max-h-none"
            />

            <div className="flex flex-col p-4 sm:p-10 justify-between w-full lg:w-1/2">
              <nav className="flex flex-col gap-2 sm:gap-5 text-2xl sm:text-3xl leading-relaxed mb-4 sm:mb-6">
                <p className="text-textMuted font-DM">ავთენტური</p>
                <p className="text-Gold font-DM">ქვევრის ღვინო</p>
              </nav>

              <div className="text-textMuted font-BPGB font-light text-sm sm:text-base leading-relaxed flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
                <p>
                  ბექას მარანი ინახავს კახური მეღვინეობის უძველეს ტრადიციებს.
                  ჩვენი ქვევრის ღვინოები — რქაწითელი, მწვანე, კახური — მზადდება
                  სრულად ორგანულ ვენახებში, ბუნებრივი დუღილის მეთოდით, 8000 წლის
                  ტრადიციის შესაბამისად.
                </p>
                <p>
                  სადეგუსტაციო ვიზიტი, ღვინის ტური და კახური სუფრა
                  ხელმისაწვდომია ჩვენს სტუმრებისთვის ნებისმიერ დროს.
                </p>
                <NavLink
                  to={"/wine-cellar"}
                  className="text-Gold font-BPGB flex items-center gap-2 hover:text-amber-400 transition-colors mt-2"
                >
                  ვრცლად <img src={arrow} alt="" className="w-8 sm:w-10" />
                </NavLink>
              </div>
            </div>
          </section>
        </div>

        <div className="container-center relative mx-auto px-4 sm:px-6 mb-16 md:mb-28 h-12 flex items-center justify-center">
          <div className="absolute left-4 right-4 sm:left-6 sm:right-6 h-px bg-Gold top-1/2 -translate-y-1/2" />
          <div className="relative bg-black px-4 z-10">
            <img src={grapes} alt="Grapes" className="w-8 sm:w-auto" />
          </div>
        </div>

        <div className="flex w-full">
          <div
            className="relative w-full h-96 md:h-120 lg:h-162.5 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden px-4"
            style={{ backgroundImage: `url(${BGfoto})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative w-full max-w-6xl  flex flex-col items-center text-center">
              <p className="font-DM text-white mb-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                ტრადიციული გემო და
              </p>
              <p className="text-Gold font-DM text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                დახვეწილი სტილი
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center container-center mx-auto px-4 sm:px-6 py-16 md:py-28">
          <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full">
            <img
              src={terasa}
              className="w-full lg:w-1/2 rounded-sm object-cover max-h-[350px] sm:max-h-[450px] lg:max-h-none"
            />

            <div className="flex flex-col p-4 sm:p-10 justify-between w-full lg:w-1/2">
              <nav className="flex flex-col gap-2 sm:gap-5 text-2xl sm:text-3xl leading-relaxed mb-4 sm:mb-6">
                <p className="text-textMuted font-DM">გასტრონომია</p>
                <p className="text-Gold font-DM">ტერასაზე</p>
              </nav>

              <div className="text-textMuted font-BPGB font-light text-sm sm:text-base leading-relaxed flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
                <p>
                  ინდივიდუალური დიზაინის ლუქსი პირდაპირ მამულის ვენახს
                  გადაჰყურებს. გაიღვიძეთ მთის სხივების თანხლებით, რომლებიც ხელით
                  ნაქსოვ თეთრეულზე ირეკლება და ისიამოვნეთ კახური დილის
                  სიმშვიდით, რომელსაც მხოლოდ ფრინველთა გალობა არღვევს.
                </p>
                <p>
                  სტუმრობის ფარგლებში გათვალისწინებულია ღვინის მარნის
                  ინდივიდუალური ტური, დილის გასეირნება ვენახში რთველის პერიოდში
                  და თავისუფალი წვდომა ღვინის ტერასაზე, საიდანაც კავკასიონის
                  ხედი იშლება.
                </p>
                <NavLink
                  to={"/restaurant"}
                  className="text-Gold font-BPGB flex items-center gap-2 hover:text-amber-400 transition-colors mt-2"
                >
                  ვრცლად <img src={arrow} alt="" className="w-8 sm:w-10" />
                </NavLink>
              </div>
            </div>
          </section>
        </div>

        <div className="flex w-full">
          <div
            className="relative w-full h-96 md:h-120 lg:h-162.5 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden px-4"
            style={{ backgroundImage: `url(${BGfoto_2})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative w-full max-w-6xl flex flex-col items-center text-center">
              <p className="font-DM text-white mb-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                ტრადიციული სტუმრობა
              </p>
              <p className="text-Gold font-DM text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                მარანში
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center container-center mx-auto px-4 sm:px-6 py-16 md:py-28">
          <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full">
            <img
              src={meinIMG_2}
              className="w-full lg:w-1/2 rounded-sm object-cover max-h-[350px] sm:max-h-[450px] lg:max-h-none"
            />

            <div className="flex flex-col p-4 sm:p-10 justify-between w-full lg:w-1/2">
              <nav className="flex flex-col gap-2 sm:gap-5 text-2xl sm:text-3xl leading-relaxed mb-4 sm:mb-6">
                <p className="text-textMuted font-DM">სიმშვიდის და კომფორტის</p>
                <p className="text-Gold font-DM">სავანე</p>
              </nav>

              <div className="text-textMuted font-BPGB font-light text-sm sm:text-base leading-relaxed flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
                <p>
                  ჩვენი ბუტიკ სასტუმრო გთავაზობთ თბილ, კომფორტულ ოთახებს აივნის
                  ხედით კახეთის ბუნებაზე. ყოველი განთავსება ინდივიდუალურად
                  მოვლილი, სტუმრის კომფორტზე ორიენტირებული.
                </p>
                <NavLink
                  to={"/hotel"}
                  className="text-Gold font-BPGB flex items-center gap-2 hover:text-amber-400 transition-colors mt-2"
                >
                  ვრცლად <img src={arrow} alt="" className="w-8 sm:w-10" />
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="flex justify-center items-center py-16 md:py-28 bg-footer text-center px-6 sm:px-8">
        <p className="font-DM text-Gold leading-14 text-lg sm:text-xl md:text-2xl italic font-light tracking-wide max-w-4xl ">
          "საქართველოში ღვინო მხოლოდ სასმელი არ არის — ეს არის დიალოგი ვაზს,
          მიწასა და ჭურჭელს შორის. ღვინის თითოეული ჩამოსხმა რვა ათასი წლის
          მეხსიერებას ატარებს."
        </p>
      </div>
    </>
  );
}

export default Home;

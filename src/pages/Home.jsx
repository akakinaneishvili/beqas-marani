import mainBg from "/home1.png";
import BGfoto from "/BGfoto.png";

import meinIMG from "/9.jpg";
import terasa from "/5.jpg";

import grapes from "/grapes.svg";



function Home() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-footer">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{ backgroundImage: `url(${mainBg})` }}
        />

        <div className="relative z-10 flex flex-col items-center justify-around w-7xl h-225  ">
          <p className="font-BPGB text-Gold text-sm tracking-[0.3em]  ">
            სოფელი ოჟიო · კახეთი · საქართველო
          </p>

          <h1 className="font-DM text-Gold text-6xl  leading-[3] h-96">
            ტრადიცია, გემოვნება და ქართული სტუმარმასპინძლობა
          </h1>

          <p className="font-BPGB text-textMuted ">
            ავთენტური ქვევრის ღვინო · გასტრონომია · ბუტიკ სასტუმრო
          </p>
        </div>
      </div>
      <div className="bg-black py-20">
        <div className=" flex items-center justify-center container-center mx-auto px-6 ">
          <section className="flex flex-col lg:flex-row items-start gap-12 mb-24">
            <img
              src={meinIMG}
              alt="მარანი"
              className="w-full lg:w-1/2 rounded-sm"
            />

            <div className="flex flex-col p-10 justify-between">
              <nav className=" flex flex-col gap-5 text-3xl leading-relaxed mb-6">
                <p className="text-textMuted font-DM">ავთენტური</p>
                <p className="text-Gold font-DM">ქვევრის ღვინო</p>
              </nav>

              <div className="text-textMuted font-BPGB font-light leading-relaxed flex flex-col gap-6 mb-12">
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
              </div>
            </div>
          </section>
        </div>

        <div
          className="container-center relative  before:content-[''] before:flex before:absolute before:left-0 before:right-0
         before:top-1/2 before:-translate-y-1/2 before:w-full before:h-1 before:bg-Gold mb-28 "
        >
          <div
            className="flex m-auto items-center justify-center p-4 absolute left-1/2 -top-1/2 -translate-1/2 bg-black z-10
          "
          >
            <img src={grapes} alt="Grapes" />
          </div>
        </div>

        <div className=" flex ">
          <div
            className="relative w-full h-162.5 bg-cover bg-center bg-no-repeat flex items-start overflow-hidden" // flex items-center შეიცვალა items-start-ით
            style={{ backgroundImage: `url(${BGfoto})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative w-6xl flex flex-col mx-auto  items-center ">
              <p className="font-DM text-white text-6xl  leading-[4]">
                ტრადიციული გემო და
              </p>
              <p className="text-Gold font-DM text-6xl mt-2">დახვეწილი სტილი</p>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center container-center py-28">
          <section className="flex flex-col lg:flex-row items-start gap-12">
            <img src={terasa} className="w-full lg:w-1/2 rounded-sm" />

            <div className="flex flex-col p-10 justify-between">
              <nav className=" flex flex-col gap-5 text-3xl leading-relaxed mb-6">
                <p className="text-textMuted font-DM">გასტრონომია</p>
                <p className="text-Gold font-DM"> ტერასაზე</p>
              </nav>

              <div className="text-textMuted font-BPGB font-light leading-relaxed flex flex-col gap-6 mb-12">
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
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center items-center py-28 bg-footer text-center px-4">
        <p className="font-DM text-Gold text-xl md:text-2xl italic font-light tracking-wide max-w-4xl leading-24">
          "საქართველოში ღვინო მხოლოდ სასმელი არ არის — ეს არის დიალოგი ვაზს,
          მიწასა და ჭურჭელს შორის. ღვინის თითოეული ჩამოსხმა რვა ათასი წლის
          მეხსიერებას ატარებს."
        </p>














      </div>


      
    </>
  );
}

export default Home;

import vazi from "/vazi.png";
import IMG_1 from "/9.jpg";
import BGfoto from "/venaxi.webp";
import Card from "../components/Card";

function Cellar() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-footer min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:h-225 py-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{ backgroundImage: `url(${vazi})` }}
        />

        <div className="relative z-10 container-center flex flex-col items-center justify-around w-full max-w-7xl h-full min-h-100 lg:h-225 gap-8 lg:gap-0">
          <p className="font-BPGB text-Gold tracking-[0.3em] uppercase">
            სოფელი ოჟიო · კახეთი · საქართველო
          </p>

          <h1 className="font-DM text-textMuted w-300 leading-40 text-5xl text-center ">
            ღვინის მარანი და კახური
            <p className=" text-Gold">ტრადიციების საწყისი </p>
          </h1>

          <p className="w-full max-w-2xl font-BPGB text-white  tracking-wide leading-relaxed">
            8000 წლის ისტორია ახლა თქვენს ჭიქაშია
          </p>
        </div>
      </div>
      <div className=" bg-black ">
        <div className="flex items-center justify-center container-center mx-auto py-12 sm:px-6">
          <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12   w-full">
            <img
              src={IMG_1}
              alt="მარანი"
              className="w-full lg:w-1/2 rounded-sm object-cover max-h-87.5 sm:max-h-112.5 lg:max-h-none"
            />

            <div className="flex flex-col p-4 sm:p-10 justify-between w-full lg:w-1/2">
              <nav className="flex flex-col gap-2 sm:gap-5 text-2xl sm:text-3xl leading-relaxed mb-4 sm:mb-6">
                <p className="text-textMuted font-DM">ვენახიდან</p>
                <p className="text-Gold font-DM">ქვევრამდე</p>
              </nav>

              <div className="text-textMuted font-BPGB font-light text-sm sm:text-base leading-relaxed flex flex-col gap-4 sm:gap-6 ">
                <p>
                  ჩვენი მეღვინეობა იყენებს კახური ქვევრის ტრადიციულ მეთოდს —
                  ღვინო ბუნებრივად დუღდება თიხის ჭურჭელში, მიწაში ჩაფლული,
                  სეზონური ტემპერატურის ცვლილებებთან ერთად. შედეგი: ცოცხალი,
                  ტანინური, ამბერი ღვინო, რომელსაც სხვა ტექნოლოგია ვერ შექმნის.
                </p>
                <p>
                  რქაწითელი,საფერავი, მწვანე — ყოველი ჯიში ინახავს ოჟიოს
                  ტერუარის სიღრმეს. სადეგუსტაციო ვიზიტი შეგიძლიათ ნებისმიერ
                  სეზონში.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex w-full">
          <div
            className="relative w-full h-96 md:h-120 lg:h-162.5 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden px-4"
            style={{ backgroundImage: `url(${BGfoto})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative w-full max-w-6xl  flex flex-col items-center text-center">
              <p className="font-DM text-white mb-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                კახეთი — სადაც
              </p>
              <p className="text-Gold font-DM text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                ყოველი ვაზი ისტორიაა
              </p>
            </div>
          </div>
        </div>

        <Card />
      </div>
    </>
  );
}
export default Cellar;

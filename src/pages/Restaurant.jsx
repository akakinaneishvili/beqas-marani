import MenuList from "../components/MenuList";
import restoranBG from "/restoranBG.png";

function Restaurant(){
    return(<>
    <div className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-footer min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:h-225 py-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{ backgroundImage: `url(${restoranBG})` }}
        />

        <div className="relative z-10 container-center flex flex-col items-center justify-around w-full max-w-7xl h-full min-h-100 lg:h-225 gap-8 lg:gap-0">
          <p className="font-BPGB text-Gold  sm:text-sm tracking-[0.3em] uppercase">
            სოფელი ოჟიო · კახეთი · საქართველო
          </p>

          <h1 className="font-HF  text-textMuted w-300 leading-40 text-5xl text-center ">
          ქართული სუფრის ხელოვნება
          <p className=" text-Gold">ტრადიციული კახური მასპინძლობა</p>
            
          </h1>

          <p  className="w-full max-w-2xl font-BPGB text-white  tracking-wide leading-relaxed">
            სადაც ქვევრის ღვინო და საუკეთესო კახური კერძები ერთმანეთს ერწყმის.
          </p>
        </div>
      </div>
      <div className="bg-footer min-h-screen text-white">
      
  
      
      <div className="w-full py-20 lg:py-28 px-4 flex justify-center border-t border-Gold/10">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6 text-left h-full   ">
            <h2 className="font-DM text-textMuted text-3xl sm:text-4xl  leading-28">
              ნატურალური ინგრედიენტები 
              <span className="text-Gold"> და საუკუნოვანი რეცეპტები</span>
            </h2>
            <div className="w-20 h-px bg-Gold/40 my-2" />
            <p className="font-BPGB text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
              ჩვენთან თითოეული კერძი ხელოვნების ნიმუშია, რომელიც კახური ტრადიციების მკაცრი დაცვით მზადდება. 
              მწვადი იწვება მხოლოდ წალამზე, შოთის პური ცხვება ჩვენს თონეში, ხოლო ბოსტნეული და ხორცპროდუქტები 
              ადგილობრივი, ოჟიოს ფერმერებისგან ყოველდღიურად ახალი მოგვეწოდება.
            </p>
          </div>
          <div className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-square overflow-hidden rounded-sm border border-Gold/20">
            <img 
              src="/kitchen-live.jpg" 
              alt="კახური სამზარეულო" 
              className="w-full h-full object-cover grayscale-10"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-black/30 px-4 flex flex-col items-center border-t border-Gold/10">
        <div className="text-center max-w-2xl mb-20 flex flex-col gap-2 ">
          <p className="font-BPGB text-Gold  tracking-[0.3em] mb-10">საფირმო მენიუ</p>
          <h2 className="font-DM text-textMuted text-3xl sm:text-4xl font-bold">კულინარიული ნობათი</h2>
        </div>

        <MenuList/>
       
      </div>

    </div>

    
    </>)
}
export default Restaurant;
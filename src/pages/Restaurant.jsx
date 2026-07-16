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

          <h1 className="font-DM text-textMuted w-300 leading-40 text-5xl text-center ">
          ქართული სუფრის ხელოვნება
          <p className=" text-Gold">ტრადიციული კახური მასპინძლობა</p>
            
          </h1>

          <p  className="w-full max-w-2xl font-BPGB text-white  tracking-wide leading-relaxed">
            სადაც ქვევრის ღვინო და საუკეთესო კახური კერძები ერთმანეთს ერწყმის.
          </p>
        </div>
      </div>
    </>)
}
export default Restaurant;
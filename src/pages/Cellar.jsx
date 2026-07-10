 
import vazi from "/vazi.png"
 
 
function Cellar() {
  return (
    <>
    <div className="relative w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-footer min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:h-225 py-12">
 
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
    style={{ backgroundImage: `url(${vazi})` }}
  />

  <div className="relative z-10 container-center flex flex-col items-center justify-around w-full max-w-7xl h-full min-h-100 lg:h-225 gap-8 lg:gap-0">
    
    <p className="font-BPGB text-Gold  sm:text-sm tracking-[0.3em] uppercase">
      სოფელი ოჟიო · კახეთი · საქართველო
    </p>

   
    <h1 className="font-DM text-textMuted w-300 leading-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center ">
      ღვინის მარანი და კახური 
       <p className=" text-Gold">ტრადიციების საწყისი  </p> 
    </h1>

   
    <p className="w-full max-w-2xl font-BPGB text-white text-sm sm:text-base md:text-lg tracking-wide leading-relaxed">
      8000 წლის ისტორია ახლა თქვენს ჭიქაშია. ბეკას მარანი — ადგილი, სადაც 
      ქვევრის ღვინო ისევ ისე ისხმება, როგორც ათასი წლის წინ — ბუნებრივად, 
      სიყვარულით, კახური ტრადიციით.
    </p>

  </div>
</div>
    </>
  );
}
export default Cellar;

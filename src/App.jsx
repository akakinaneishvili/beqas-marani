function App() {
  return (
    <>
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center bg-[#0B0B0B] px-6 py-16 border-b border-[#1C1C1C]">
        <div className="max-w-3xl mx-auto">
          {/* პატარა, ელეგანტური ზედა სათაური DM Archium ფონტით */}
          <span className="font-DM text-[#D4AF37] uppercase tracking-widest text-sm block mb-6">
            8 000 წლიანი ტრადიცია
          </span>

          {/* მთავარი ციტატა Noto Serif ფონტით - დიდი, პრემიუმ და თბილი იერით */}
          <blockquote className="font-BPGB text-2xl md:text-4xl text-white italic leading-relaxed mb-6">
            „საქართველოში ღვინო მხოლოდ სასმელი არ არის — ეს ვაზს, მიწასა და
            ჭურჭელს შორის საუბარია.“
          </blockquote>

          {/* გაგრძელება DM Archium ფონტით, შედარებით ნაზი და ჰაეროვანი სტილით */}
          <p className="font-DM text-base md:text-lg text-gray-400 max-w-xl mx-auto tracking-wide">
            ყოველი დასხმა რვა ათასი წლის მოგონებას ატარებს.
          </p>

          {/* დეკორატიული ოქროსფერი გამყოფი ხაზი */}
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-8 opacity-60" />
        </div>
      </section>
    </>
  );
}

export default App;

import React from 'react';

function Feature() {
  const leftFeatures = [
    {
      title: 'QVEVRI WINEMAKING',
      desc: 'Ancient clay vessels buried in earth preserve the soul of Kakheti wine traditions.',
    },
    {
      title: 'ESTATE GROWN',
      desc: 'Saperavi and Rkatsiteli grapes grown on our own land in the Alazani Valley.',
    },
    {
      title: 'ORGANIC FARMING',
      desc: 'No pesticides, no shortcuts — hand-harvested with respect for the terroir.',
    },
  ];

  const rightFeatures = [
    {
      title: 'CELLAR AGED',
      desc: 'Minimum 12 months in cool underground cellars for depth and complexity.',
    },
    {
      title: 'DAILY TOURS',
      desc: 'Guided tastings every day from 11 AM. Groups welcome, booking preferred.',
    },
    {
      title: 'FULL HOSPITALITY',
      desc: 'Marani, restaurant, and guesthouse — a complete Georgian experience in Otcho.',
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
      {/* ზედა სათაურების ნაწილი */}
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <p className="text-Gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
          ჩ ვ ე ნ ი  უ პ ი რ ა ტ ე ს ო ბ ე ბ ი
        </p>

        <h2 className="font-TITLE text-3xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4">
          EVERY FEATURE YOUR SITE NEEDS
        </h2>

        {/* ოქროსფერი ზოლი */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent opacity-60"></div>
      </div>

      {/* ძირითადი Grid კონტენტი */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* მარცხენა 3 ბლოკი (ტექსტები მარჯვნივ გასწორებული lg-ზე) */}
        <div className="space-y-12 text-center lg:text-right">
          {leftFeatures.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-center lg:justify-end gap-2">
                <h3 className="text-Gold text-sm tracking-[0.2em] font-medium uppercase">
                  {item.title}
                </h3>
                <span className="hidden lg:inline-block w-4 h-[1px] bg-Gold/50"></span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto lg:ml-auto lg:mr-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* შუა ნაწილი: ცენტრალური ილუსტრაცია და ბოთლი */}
        <div className="flex flex-col items-center justify-center my-8 lg:my-0 relative">
          {/* რუკის/ორგანული ფორმის ილუსტრაცია */}
          <div className="w-64 h-64 sm:w-72 sm:h-72 border border-Gold/40 rounded-[40%_60%_70%_30%/50%_60%_30%_70%] flex items-center justify-center relative p-4 mb-6">
            <div className="text-center text-Gold/80 text-xs tracking-widest">
              <span>● მარანი</span>
              <br />
              <span className="text-[10px]">● ვენახი</span>
            </div>
          </div>

          {/* ბოთლის სურათი (ან იმიტაცია) */}
          <div className="relative z-10 -mt-20">
            <img 
              src="/wine.jpg" // ან თქვენი ბოთლის ფოტოს Path
              alt="Beka's Marani Bottle" 
              className="h-48 sm:h-64 object-contain shadow-2xl rounded-md"
            />
          </div>

          <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase mt-4">
            KAKHETI · GEORGIA
          </p>
        </div>

        {/* მარჯვენა 3 ბლოკი (ტექსტები მარცხნივ გასწორებული lg-ზე) */}
        <div className="space-y-12 text-center lg:text-left">
          {rightFeatures.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="hidden lg:inline-block w-4 h-[1px] bg-Gold/50"></span>
                <h3 className="text-Gold text-sm tracking-[0.2em] font-medium uppercase">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto lg:mr-auto lg:ml-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Feature;
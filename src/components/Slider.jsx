import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import { useEffect, useState } from 'react';
import { API } from '../config';



function Slider() {


const[slaid,setslaid]= useState([]);


useEffect(()=>{
    const slaidMap = async()=> {
        const respon = await fetch(`${API}/sliderPhotos`);
        const data = await respon.json();
        setslaid([...data,...data])
    }
    slaidMap()
},[])


  return (
  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-black py-12 overflow-hidden">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        loop={true}
        freeMode={true}
        grabCursor={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000} 
        modules={[FreeMode, Autoplay]}
        className="w-full px-4 cursor-grab active:cursor-grabbing"
      >
        {slaid.map((item, i) => (
          <SwiperSlide 
            key={`${item.id}-${i}`} 
            className="!w-[280px] sm:!w-[320px] md:!w-[360px]"
          >
            <div className="relative h-120 overflow-hidden rounded-md group select-none">
              <img
                src={item.image}
                alt={item.title || "Gallery image"} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
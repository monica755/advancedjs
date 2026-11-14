import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/Images/1.png";
import img2 from "../assets/Images/2.png";
import img3 from "../assets/Images/3.png";

const SpecialMemories = () => {
  return (
    <>
      <div className="font-semibold p-5 text-center">

        <h1 className="font-extrabold text-2xl">
          Special Memories
        </h1>

        <h2 className="my-5">
          Every Diwali brings new memories and happiness.
          Spending time with family and friends makes
          this festival special.
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
          className="w-full"
        >
         
          <SwiperSlide>
            <img src={img1}
              className="w-full h-100 object-cover rounded-lg"
              alt="Diwali 1" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img2}
              className="w-full h-100 object-cover rounded-lg"
              alt="Diwali 2" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img3}
              className="w-full h-100 object-cover rounded-lg"
              alt="Diwali 3" />
          </SwiperSlide>

        </Swiper>

      </div>
    </>
  );
};

export default SpecialMemories;
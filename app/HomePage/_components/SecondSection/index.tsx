"use client";

import ContactForm from "./_components/ContactForm";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Mousewheel,
  Autoplay,
  Thumbs,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const imgList = [
  {
    img: "/images/hair.jpg",
  },
  {
    img: "/images/beard.jpg",
  },
  {
    img: "/images/nevou.jpg",
  },
  {
    img: "/images/product.jpg",
  },
];
const SecondSection = () => {
  const [activeThumb, setActiveThumb] = useState<any>(null);

  return (
    <section className=" bg-black">
      <div className="lg:mx-auto max-w-3xl">
        <div className="border-8 bg-black border-black">
          <Swiper
            modules={[Navigation, Thumbs]}
            loop={true}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            navigation={true}
            thumbs={{
              swiper:
                activeThumb && !activeThumb.destroyed ? activeThumb : null,
            }}
            className="thumbShow"
          >
            {imgList.map((p, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={p.img} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setActiveThumb}
            loop={false}
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="thumbBtn mt-5"
          >
            {imgList.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <img src={item.img} alt="product images" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>{" "}
      {/* <ContactForm /> */}
    </section>
  );
};

export default SecondSection;

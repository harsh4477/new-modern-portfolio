import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxClock,
  RxFileText,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Design that fits",
    description:
      "Bootstrap and Tailwind CSS are the heart of design, thus, I make sure that my designs are the perfect fit for every device and are completely mobile-friendly without any design hiccups or last-minute turn-offs.",
  },
  {
    Icon: RxPencil2,
    title: "Everything doesn’t suit everyone",
    description:
      "Every project has its own design language. Thus, I create customized designs and templates that match your brand's identity, making sure that they are unique, inspiring, and create an impactful online presence.",
  },
  {
    Icon: RxRocket,
    title: "Let Google know your brand",
    description:
      "A boring design is a total piss off, even for google. Thus, I make sure that my designs are well-optimized for search engines and support your website to rank higher and reach your target audience.",
  },
  {
    Icon: RxClock,
    title: "Get yourself running in no time",
    description:
      "A designer is never off duty. I understand how important it is for your brand to fix design issues. Thus, I make sure that the high-quality work is delivered to you in no time.",
  },
  {
    Icon: RxFileText,
    title: "Perfection is the key",
    description:
      "From planning to execution, I make sure that your dream project is accomplished on time with proper communication, documentation, and collaboration, well-suited for your target audience.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[360px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white/10 h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointertransition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            {/* <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;

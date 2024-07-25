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
    title: "Responsive Design",
    description:
      "I ensure that all my websites are fully responsive and mobile-friendly, using frameworks like Bootstrap and Tailwind CSS.",
  },
  {
    Icon: RxPencil2,
    title: "Custom Designs:",
    description:
      "I create custom designs and templates tailored to your brand's identity, ensuring a unique and impactful online presence.",
  },
  {
    Icon: RxRocket,
    title: "SEO Optimization:",
    description:
      "My designs are optimized for search engines, helping your website rank higher and reach a larger audience.",
  },
  {
    Icon: RxClock,
    title: "Fast Turnaround:",
    description:
      "I deliver high-quality work quickly, so your website is up and running in no time.",
  },
  {
    Icon: RxFileText,
    title: "Project Management:",
    description:
      "From start to finish, I manage your project with regular communication and updates to ensure your vision is brought to life.",
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

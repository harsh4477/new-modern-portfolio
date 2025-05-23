import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Portfolio",
          path: "/thumb11.png",
          link: "https://harsh-patel.vercel.app/",
        },
        {
          title: "Contact Form",
          path: "/thumb12.png",
          link: "https://codepen.io/harsh0501/pen/WNYbrjP",
        },
        {
          title: "Vertical Steps Animation",
          path: "/thumb13.png",
          link: "https://codepen.io/harsh0501/pen/GRwEYbz",
        },
        {
          title: "Progress Bar / Skill Bar",
          path: "/thumb14.png",
          link: "https://codepen.io/harsh0501/pen/NWeWbLL",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    // <Swiper
    //   spaceBetween={10}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   modules={[Pagination]}
    //   className="h-[280px] sm:h-[480px]"
    // >
    <>
      {workSlides.slides.map((slide, i) => (
        <div className="grid  md:grid-cols-2 gap-4">
          {slide.images.map((image, imageI) => (
            <div
              className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              key={imageI}
            >
              <div className="hidden lg:flex items-center justify-center relative overflow-hidden group">
                {/* image */}
                <Image
                  src={image.path}
                  alt={image.title}
                  width={500}
                  height={300}
                />

                {/* overlay gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                  aria-hidden
                />

                {/* title */}
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                  <Link
                    href={image.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  >
                    {/* title part 1 */}
                    <div className="delay-100">LIVE</div>
                    {/* title part 2 */}
                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      PROJECT
                    </div>
                    {/* icon */}
                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      <BsArrowRight aria-hidden />
                    </div>
                  </Link>
                </div>
              </div>
              <Link
                href={image.link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex lg:hidden items-center gap-x-2 text-[13px] tracking-[0.2em]"
              >
                <Image
                  src={image.path}
                  alt={image.title}
                  width={500}
                  height={300}
                />
              </Link>
            </div>
          ))}
        </div>
      ))}
    </>
    // </Swiper>
  );
};

export default WorkSlider;

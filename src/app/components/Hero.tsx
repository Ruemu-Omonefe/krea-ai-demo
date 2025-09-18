"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import img1 from '/images/hero1.jpg'



const slides = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image Generation",
    description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
  },
  {
    id: 2,
    image: "/images/hero-2.jpg",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description: "We're making the weights to our FLUX1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Get Started",
  },
  {
    id: 3,
    image: "/images/hero-3.jpg",
    title: "WAN Studio",
    subtitle: "AI Workspace",
    description: "Collaborate and build stunning projects seamlessly.",
    buttonText: "Explore Studio",
  },
  {
    id: 4,
    image: "/images/hero-2.jpg",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description: "We're making the weights to our FLUX1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Get Started",
  },
];

export default function Hero() {
  return (
    <section className="w-full mx-auto mt-12 pl-6 md:pl-8 pr-6 md:pr-0">
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 1.5 }}}
            pagination={{ el: ".custom-pagination", clickable: true, }}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev",}}
            className="w-full h-[400px] md:h-[500px]  overflow-hidden"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                        <div className="absolute inset-0  flex flex-col justify-end items-center text-white p-10">
                            <h2 className="text-5xl md:text-8xl font-bold text-center absolute top-1/2 -translate-y-1/2"> {slide.title}</h2>
                            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mt-6">
                                <div className="text-center md:text-left">
                                    <p className="text-2xl"> {slide.subtitle}</p>
                                    <p className="text-sm max-w-[400px] mx-auto md:mx-0"> {slide.description}</p>
                                </div>
                                <button className="mt-6 md:mt-0 px-6 py-3 rounded-full bg-gray-200 text-black font-medium self-end">{slide.buttonText}</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        {/* Swiper controls */}
        <div className="flex justify-end items-center mt-4">
            <div className="w-1/3"></div>
            {/* Pagination dots */}
            <div className="custom-pagination flex gap-2 justify-center w-1/3"></div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-3 mr-7 w-1/3">
                <button className="custom-prev p-1 bg-gray-200 dark:bg-neutral-800 rounded-full"><ChevronLeft size={15}/></button>
                <button className="custom-next p-1 bg-gray-200 dark:bg-neutral-800 rounded-full"><ChevronRight size={15} /></button>
            </div>
        </div>
    </section>
  );
}

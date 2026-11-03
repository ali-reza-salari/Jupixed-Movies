import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';
import heroSectionSlidesData from "../../../data/heroSectionSlidesData.ts";
import Slides from "./fragments/Slides.tsx";

export default function HeroSlider() {
    return <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation , Autoplay]}
        autoplay={{ delay: 3000 }}
        className="hero-slider h-200"
    >
        {
            heroSectionSlidesData.map(item => (
                <SwiperSlide key={item.id}>
                    <Slides imgSrc={item.img} />
                </SwiperSlide>
            ))
        }
    </Swiper>
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import heroSectionSlidesData from "../../../data/heroSectionSlidesData.ts";
import Slides from "./fragments/Slides.tsx";


export default function HeroSection() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="heroSlider h-200"
            >
                {
                    heroSectionSlidesData.map(item => (
                        <SwiperSlide key={item.id}>
                            <Slides image={item.img} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}
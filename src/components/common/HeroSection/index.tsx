import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


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
                className="mySwiper h-100"
            >
                <SwiperSlide>
                    <img className={`w-full h-full object-cover`} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz16j3CFhPbywYeWtzt9XW7w96vanbxp8TAgelO8-lol3mUVa7vUwhe_w&s=10`} />
                </SwiperSlide>

                <SwiperSlide>
                    <img className={`w-full h-full object-cover`} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtc0bcmd-cQia6jfl5QaSmhQVHdRezix5BE8v7e0TnmDU-uezztqDrjOo&s=10`} />
                </SwiperSlide>

                <SwiperSlide>
                    <img className={`w-full h-full object-cover`} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82eUoIYVGfPJmIxmtfSAo8CxT2TYG-ewRWvaSrUZL1xMLMZq58NQFnKkh&s=10`} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
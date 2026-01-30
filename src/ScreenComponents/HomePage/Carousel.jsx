
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import image1 from '../../assets/Rectangle 61.png'

import 'swiper/css'

const Carousel = () => {
    const swiperRef = useRef(null)

    const banners = [
        { image: image1 },
        { image: image1 },
    ]

    return (
        <div className=''>
            <Swiper
                modules={[Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 1800,
                }} watchSlidesProgress={true}

                spaceBetween={20}
                loop
            >
                {banners.map((item, index) => (
                    <SwiperSlide key={index} style={{ width: '100vw' }}>
                        <div>
                            <div className="swiper-wrapper">
                                <img
                                    src={item.image}
                                    className="w-100"
                                    alt={item.title}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
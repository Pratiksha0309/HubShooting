import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Thumbs } from 'swiper/modules'

import image1 from '../../assets/ExpertGun.png'
import image2 from '../../assets/Rectangle 105.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'


const ImageSection = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const banners = [
        { image: image1 },
        { image: image2 },
        { image: image1 },
        { image: image2 },
    ]

    return (
        <div >
            <Swiper
                modules={[Autoplay, Pagination, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                pagination={{ clickable: true }}
                spaceBetween={20}
                loop
                className="container custom-swiper-pagination"
            >
                {banners.map((item, index) => (
                    <SwiperSlide key={index} >
                        <div className="bigImageSection">
                            <img
                                src={item.image}
                                className="w-100 h-100 object-fit-contain"
                                alt="bigImg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={3}
                spaceBetween={15}
                watchSlidesProgress
                className="container smallImgSectionDiv"
            >
                {banners.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="smallImgSection">
                            <img
                                src={item.image}
                                className="w-100 h-100 object-fit-contain"
                                alt="smallImg"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ImageSection



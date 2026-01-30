
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import arrowIcon from '../../assets/expand_less.svg'
import image1 from '../../assets/image 95.png'
import ruppesIcon from '../../assets/fa_rupee.svg'
import ruppesIcon1 from '../../assets/fa_rupee (1).svg'
import leftArrow from '../../assets/LeftArrow.svg';
import rightArrow from '../../assets/RightArrow.svg';
import 'swiper/css/pagination';
import 'swiper/css'
import vectorImage from '../../assets/Vector 2.svg'


const FeaturedAccesoriesSection = () => {
    const swiperRef = useRef(null)

    const banners = [
        { image: image1, title: 'gLOVE PREMIUM OPEN' },
        { image: image1, title: 'gLOVE PREMIUM OPEN' },
        { image: image1, title: 'gLOVE PREMIUM OPEN' },
        { image: image1, title: 'gLOVE PREMIUM OPEN' },
        { image: image1, title: 'gLOVE PREMIUM OPEN' },
        { image: image1, title: 'gLOVE PREMIUM OPEN' },
    ]

    return (
        <div className='feacturesAccesoriesMainDiv w-100 mt-5'>
            <div className='container mt-3' style={{ position: 'relative' }}>
                <div className='featuredMainDiv w-100'>
                    <div className='w-100'>

                        <div className='d-flex justify-content-between '>
                            <p className='feacturesAccesoriesText'>Featured ACCESSORIES</p>
                            <button className='viewAllBtn'>View All <img src={arrowIcon} alt='' /></button>
                        </div>
                    </div>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        loop
                        pagination={{
                            clickable: true
                        }}
                        className='container'
                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                    >
                        {banners.map((item, index) => (
                            <SwiperSlide key={index} className='w-auto container feacturesAccesoriesSwiper '  >
                                <div className='bg-light '>
                                    <div className="swiper-wrapper ">
                                        <div className='mt-2'>
                                            <div className='feacturesAccesoriesProductDiv'>
                                                <img
                                                    src={item.image}
                                                    className="object-fit-cover w-100 "
                                                    alt={item.title}
                                                />
                                                <div className='featuredSliderTextDiv'>

                                                    <p className='featuredSliderHeading'>{item.title}</p>
                                                    <p className='featuredDiscountPrice d-flex align-items-center gap-1'> <img src={ruppesIcon1} />370010.0</p>
                                                    <p className='featuredPrice d-flex align-items-center gap-1'><img src={ruppesIcon} />370010.0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='swiper-pagination'></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="arrow-left arrow arrowPrev d-lg-flex d-none" onClick={() => swiperRef.current?.slidePrev()} style={{ position: 'absolute', top: '50%', zIndex: '999', left: '-50px' }}><img src={leftArrow} /></button>
                    <button className="arrow-right arrow arrowPrev d-lg-flex d-none" onClick={() => swiperRef.current?.slideNext()} style={{ position: 'absolute', top: '50%', zIndex: '999', right: '-50px' }}><img src={rightArrow} /></button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedAccesoriesSection;

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import arrowIcon from '../../assets/expand_less.svg'
import image1 from '../../assets/gunImage.png'
import ruppesIcon from '../../assets/fa_rupee.svg'
import ruppesIcon1 from '../../assets/fa_rupee (1).svg'
import leftArrow from '../../assets/LeftArrow.svg';
import rightArrow from '../../assets/RightArrow.svg';
import 'swiper/css/pagination';
import 'swiper/css'
import vectorImage from '../../assets/Vector 2.svg'
import ProductCard from '../CommonComponent/ProductCard'


const SimilarProducts = () => {
    const swiperRef = useRef(null)

    const banners = [
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
    ]

    return (
        <div>
            <div className='container mt-5 ' style={{ position: 'relative' }}
            >
                <div className='similarProductDiv w-100'>
                    <div className='w-100'>
                        <div className='d-flex justify-content-between '>
                            <p className='mainHeading'>Similar Products</p>
                            <button className='viewAllBtn'>View All <img src={arrowIcon} alt='' /></button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={4}
                        spaceBetween={20}
                        loop
                        pagination={{
                            clickable: true
                        }}
                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                        className='w-100'
                         breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {banners.map((item, index) => (

                            <SwiperSlide key={index}  >
                                <div>
                                    <div className="swiper-wrapper swiper1">
                                        <ProductCard
                                            imgSrc={item.image}
                                            title={item.title}
                                            mainPrice={item.mainPrice}
                                            discountPrice={item.discountPrice}
                                        />
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

export default SimilarProducts;
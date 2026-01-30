
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
import { useNavigate } from 'react-router-dom'


const FeaturedProductScreen = () => {
    const navigate = useNavigate();
    const swiperRef = useRef(null)

    const handleNavigate = () =>{
        navigate('/product')
    }

    const banners = [
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
    ]

    return (
        <div>
            <div className='container mt-5 ' style={{ position: 'relative' }}>
                <div className='featuredMainDiv w-100'>
                    <div className='w-100'>

                        <div className='d-flex justify-content-between '>
                            <p className='mainHeading'>Featured Products</p>
                            <button className='viewAllBtn'>
                                <div className='viewAllBtnInnerDiv' role='button' onClick={handleNavigate}>
                                    View All <img src={arrowIcon} className='viewAllBtnArrow' alt='' />
                                </div>
                            </button>
                        </div>

                        <div className='featuredbtnDiv'>
                            <button className='activefeaturedbtnText'>Popular</button>
                            <button className='featuredbtnText'>Just Launched</button>
                            <button className='featuredbtnText'>Upcoming</button>
                        </div>
                    </div>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        loop
                        pagination={{
                            clickable: true
                        }}
                        className='container'
                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                    >
                        {banners.map((item, index) => (
                            <SwiperSlide key={index} className='w-auto container' >
                                <div>
                                    <div className="swiper-wrapper swiper1"  >
                                        <div className='mt-2 ' style={{boxShadow:'0 6px 16px 0 rgba(0, 0, 0, 0.06)'}}>
                                            <div className='featuredImageDiv'>
                                                <img src={vectorImage} className='featuredVectorImage w-100 object-fit-cover' />
                                                <img
                                                    src={item.image}
                                                    className="object-fit-cover w-100 featuredGunImage"
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className='featuredSliderTextDiv'>
                                                <p className='featuredSliderHeading'>{item.title}</p>
                                                <p className='featuredDiscountPrice d-flex align-items-center gap-1'> <img src={ruppesIcon1} />370010.0</p>
                                                <p className='featuredPrice d-flex align-items-center gap-1'><img src={ruppesIcon} />370010.0</p>
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
                    {/* <Swiper
                    modules={[Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={4}
                    autoplay={{
                        delay: 1800,
                    }}
                    watchSlidesProgress={true}
                    spaceBetween={20}
                    loop
                    className='swiper'
                >
                    {banners.map((item, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto' }}>
                            <div >
                                <div className="swiper-wrapper">
                                    <div className=''>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className='featuredImageSection'
                                        />
                                        <p className='featuredSliderHeading'>{item.title}</p>
                                        <p className='featuredDiscountPrice d-flex align-items-center gap-1'> <img src={ruppesIcon1} />370010.0</p>
                                        <p className='featuredPrice d-flex align-items-center gap-1'><img src={ruppesIcon} />370010.0</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper> */}


                </div>
            </div>
            {/* <div className='arrowbtnDiv'>
                        <button
                            className='arrowbtn'
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <img src={rightArrow} alt='rightArrow'/>
                        </button>

                        <button
                            className='arrowbtn'
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <img src={leftArrow} alt='leftArrow'/>
                        </button>
                </div> */}
        </div >
    )
}

export default FeaturedProductScreen
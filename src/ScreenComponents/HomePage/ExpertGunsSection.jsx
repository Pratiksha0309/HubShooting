
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import image1 from '../../assets/ExpertGun.png'
import 'swiper/css/pagination';
import 'swiper/css'
const ExpertGunsSection = () => {
    const swiperRef = useRef(null)

    const banners = [
        { image: image1 },
        { image: image1 },
    ]
    return (
        <div className='mt-5  expertGunMainDiv px-lg-3'>
            <div className='row'>
                <div className='col-lg-6 col-12 p-lg-0'>
                    <div className='expertGunFirstDiv px-md-4 px-1'>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            slidesPerView={'auto'}
                            // autoplay={{
                            //     delay: 1800,
                            // }} watchSlidesProgress={true}
                            pagination={{
                                clickable: true
                            }}
                            spaceBetween={20}
                            loop
                        >
                            {banners.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='d-flex flex-column justify-content-center align-items-center expertGunswiper container'>
                                        <img
                                            src={item.image}
                                            className="w-100 object-fit-cover expertGunImage"
                                            alt={item.title}
                                        />

                                        <div className='row gap-3 mt-3' style={{ width: '75%' }}>
                                            <div className='col-md-4 col-6 expertGunFirstDiv1'>
                                                <p className='expertGunFirstDivValues'>99.9%</p>
                                                <p className='expertGunFirstDivText'>Accuracy</p>
                                            </div>
                                            <div className='col-md-4 col-6 expertGunFirstDiv1'>
                                                <p className='expertGunFirstDivValues'>5000 G</p>
                                                <p className='expertGunFirstDivText'>Weight</p>
                                            </div>
                                            <div className='col-md-4 col-6 expertGunFirstDiv1'>
                                                <p className='expertGunFirstDivValues'>420 mm</p>
                                                <p className='expertGunFirstDivText'>Barrel Length</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
                <div className='col-lg-6 col-12 p-lg-0'>
                    <div className='expertGunSecDiv'>
                        <div className='expertGunSecDiv1'>
                            <div>
                                <p className='expertGunSecDivHeading1 '>WALTHER LP500 </p>
                                <p className='expertGunSecDivHeading2'> MEXPERT BLUE ANGLE RE M</p>
                            </div>
                            <p className='expertSecDivDisc'>The flagship model of the LG500 family. From World Cup to Olympics. The new world of Hub Shooting is here with a new & fresh buying experience</p>

                        </div>
                        <button className='expertSecDivBtn'>Shop Air Pistols Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertGunsSection
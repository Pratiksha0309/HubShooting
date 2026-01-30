import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import arrowIcon from '../../assets/expand_less.svg'
import image1 from '../../assets/Rectangle 5.png'
import ruppesIcon from '../../assets/fa_rupee.svg'
import ruppesIcon1 from '../../assets/fa_rupee (1).svg'
import leftArrow from '../../assets/LeftArrow.svg';
import rightArrow from '../../assets/RightArrow.svg';
import 'swiper/css/pagination';
import 'swiper/css'

const NewsSection = () => {
    const swiperRef = useRef(null)

    const banners = [
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
    ]
    return (
        <div className='mt-5 newsSectionMainDiv py-5'>
            <p className='newsfirstText'>HUB SPORTS</p>
            <p className='newsSecondText'>LATEST NEWS</p>
            <div className=''>
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
                >
                    {banners.map((item, index) => (
                        <SwiperSlide key={index} className='container'  >
                            <div>
                                <div className="swiper-wrapper swiper1 row newsSliderDiv ">
                                    <div className='mt-lg-2 row gap-lg-0 gap-4'>
                                        <div className='col-lg-6 col-12 pe-lg-5'>
                                            <div className='newsImg'>
                                            <img
                                                src={item.image}
                                                className="object-fit-cover w-100 newsImg"
                                                alt={item.title}
                                            />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-12 newsSecondDiv ps-lg-5 text-start'>
                                            <p className='newsHighlightedText'>FEATURED</p>
                                            <p className='newsHeadingText'> Indian Shooting Champions: Stories of Success and Dedication</p>
                                            <p className='newsDesc'>370010.0India has a rich history of excellence in shooting sports, producing world-class athletes who have brought glory to the nation on the international stage. These champions have shown discipline, and an unwavering spirit that has inspired a new generation of shooters.</p>
                                            <button className='newsBtn'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='swiper-pagination'></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default NewsSection
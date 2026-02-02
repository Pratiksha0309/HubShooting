import React from 'react'
import image2 from '../../assets/WaltherGunImage.png'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import arrowIcon from '../../assets/expand_less.svg'
import image1 from '../../assets/AirGunImage.png'
import ruppesIcon from '../../assets/fa_rupee.svg'
import ruppesIcon1 from '../../assets/fa_rupee (1).svg'
import leftArrow from '../../assets/LeftArrow.svg';
import rightArrow from '../../assets/RightArrow.svg';
import 'swiper/css/pagination';
import 'swiper/css'
import vectorImage from '../../assets/Vector 2.svg'

const WaltherGunSection = () => {
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
    <div className='waltherGunMainDiv mt-5'>
      <img src={image2} className='mt-5 object-fit-contain waltherGunImg' />
      <div className='waltherGunFirstDiv w-100'>
        <div className='px-2'>
          <p className='waltherGunText'>WALTHER LP500 M EXPERT BLUE ANGLE RE M</p>
          <p className='waltherDesc'>The new world of Hub Shooting is here with a new & fresh buying experience.</p>
          <button className='waltherGunBtn'>Shop Air Rifles Now</button>
        </div>
      </div>
      <div className='WaltherGunSliderDiv'>
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={25}
          loop
          pagination={{
            clickable: true
          }}
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
            <SwiperSlide key={index} className='mt-5'>
              <div className='walterswipermainDiv'>
                <div className="swiper-wrapper walterGunSwiper">
                  <div className='mt-2'>
                    <div className='featuredImageDiv'>
                      <img
                        src={item.image}
                        className="object-fit-cover w-100 "
                        alt={item.title}
                      />
                    </div>
                    <div className='waltharSliderTextDiv'>
                      <p className='featuredSliderHeading mt-3 ps-3'>{item.title}</p>
                      <p className='featuredDiscountPrice d-flex align-items-center gap-1 ps-3'> <img src={ruppesIcon1} />370010.0</p>
                      <p className='featuredPrice d-flex align-items-center gap-1 ps-3'><img src={ruppesIcon} />370010.0</p>
                    </div> </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default WaltherGunSection
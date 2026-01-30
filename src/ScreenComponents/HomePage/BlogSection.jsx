import React from 'react'
import image2 from '../../assets/WaltherGunImage.png'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import arrowIcon from '../../assets/expand_less.svg'
import image1 from '../../assets/Rectangle 102.png'
import ruppesIcon from '../../assets/fa_rupee.svg'
import ruppesIcon1 from '../../assets/fa_rupee (1).svg'
import leftArrow from '../../assets/LeftArrow.svg';
import rightArrow from '../../assets/RightArrow.svg';
import 'swiper/css/pagination';
import 'swiper/css'
import vectorImage from '../../assets/Vector 2.svg'

const BlogSection = () => {
  const swiperRef = useRef(null)

  const banners = [
    { image: image1, title: 'A Future of Shooting Sports in India : Aiming for Greatness' },
    { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
    { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
    { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
    { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
    { image: image1, title: 'WALTHER LG500 M ITEC RE M' },
  ]
  return (
    <div className=' container blogsMainDiv' style={{ position: 'relative' }}>
      <p className='blogsText'>RECENT BLOGS</p>
      <div className='mt-auto '>
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={'auto'}
          spaceBetween={30}
          loop
          pagination={{
            clickable: true
          }}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}

        >
          {banners.map((item, index) => (
            <SwiperSlide key={index} className='w-auto'  >
              <div className='walterswipermainDiv '>
                <div className="swiper-wrapper blogsSwiper">
                  <div className='mt-2 ' style={{ boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.06)' }}>
                    <div className='featuredImageDiv'>
                      <img
                        src={item.image}
                        className="object-fit-cover w-100 "
                        alt={item.title}
                      />
                    </div>
                    <div className='blogsTextDiv'>
                     <div>
                       <div className='featuredSliderHeading '>A Future of Shooting Sports in</div>
                      <div className='featuredSliderHeading'> India : Aiming for Greatness</div>
                     </div>
                      <p className='blogsReadmoreText'>Read More</p>
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
  )
}

export default BlogSection
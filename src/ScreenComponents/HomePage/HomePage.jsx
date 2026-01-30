import React from 'react'
import Carousel from './Carousel'
import FeaturedProductScreen from './FeaturedProductScreen'
import './homepagestyle.scss'
import './homepagestyle2.scss'
import ShopByCategory from './ShopByCategory'
import BuyNewProductSection from './BuyNewProductSection'
import ExpertGunsSection from './ExpertGunsSection'
import AirGunsSection from './AirGunsSection'
import FeaturedAccesoriesSection from './FeaturedAccesoriesSection'
import BrandsSection from './BrandsSection'
import SportsHubSection from './SportsHubSection'
import NewsSection from './NewsSection'
import GooglePlaySection from './GooglePlaySection'
import WaltherGunSection from './WaltherGunSection'
import BlogSection from './BlogSection'
import VideoSection from './VideoSection'

const HomePage = () => {
  return (
    <div >
      <Carousel />
      <FeaturedProductScreen />
      <ShopByCategory />
      <BuyNewProductSection />
      <ExpertGunsSection />
      <AirGunsSection />
      <FeaturedAccesoriesSection />
      <BrandsSection />
      <SportsHubSection />
      <NewsSection />
      {/* <GooglePlaySection /> */}
      <WaltherGunSection />
      <BlogSection />
      <VideoSection />
    </div>
  )
}

export default HomePage
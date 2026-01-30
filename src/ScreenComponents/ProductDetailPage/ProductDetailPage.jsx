import React, { useState } from 'react'
import './ProductDetailPageStyle.scss'
import { Breadcrumb, Tab, Tabs } from 'react-bootstrap'
import ImageSection from './ImageSection'
import ProductInformation from './ProductInformation'
import SimilarProducts from './SimilarProducts'

const ProductDetailPage = () => {

    return (
        <div className='container'>
            <div className='breadCrupmpsDiv d-md-block d-none'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className='breadCrumpsText'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/" className='breadCrumpsText'>New Air Weapon</Breadcrumb.Item>
                    <Breadcrumb.Item href="/" className='breadCrumpsText'> New Air Rifles</Breadcrumb.Item>
                    <Breadcrumb.Item active className='breadCrumpsText'>LG500 itec Anatomic M</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='row productDetailDiv'>
                <div className='col-lg-6 col-12'>
                    <ImageSection />
                </div>
                <div className='col-lg-6 col-12'>
                    <ProductInformation />
                </div>
            </div>
            <div className='productTabDiv'>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="productTab"
                >
                    <Tab eventKey="home" title="Product Description" >
                        <div className='navTabsDesc'>
                            The Walther LG500 itec marks a new era in competitive shooting, redefining perfection with its advanced features and cutting edge innovations. Whether a seasoned competitor or an aspiring champion, the Walther LG500 itec promises an unmatched shooting experience that will lead you straight to the podium.

                            Progressive new features as the revolutionary electronic trigger experience, systematic balance with feedback otimisation, enhanced itec bedding technology and a ground-breaking micro-precise Visionic Match Diopter guarantee ultimate precision with every single shot.
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Technical Specification">
                        <div className='navTabsDesc'>
                            The Walther LG500 itec marks a new era in competitive shooting, redefining perfection with its advanced features and cutting edge innovations. Whether a seasoned competitor or an aspiring champion, the Walther LG500 itec promises an unmatched shooting experience that will lead you straight to the podium.
                        </div>
                    </Tab>
                </Tabs>
            </div >
            <div>
                <SimilarProducts />
            </div>
        </div >
    )
}

export default ProductDetailPage
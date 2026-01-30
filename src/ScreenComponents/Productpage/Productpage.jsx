import React, { useState } from 'react'
import ProductCard from '../CommonComponent/ProductCard'
import image1 from '../../assets/gunImage.png'
import { Breadcrumb, Dropdown } from 'react-bootstrap'
import './ProductPageStyle.scss'
import Filters from './Filters.jsx'
import sortImage from '../../assets/bx_sort.svg'
import expandIcon from '../../assets/expand_more.svg'
import filterImage from '../../assets/mage_filter.svg'
import resetIcon from '../../assets/radix-icons_reset.svg'
import cancleIcon from '../../assets/codex_cross.svg'
import { Link, useNavigate } from 'react-router-dom'

const Productpage = () => {
    const [sortBy, setSortBy] = useState('Popularity');
    const [selected, setSelected] = useState('Popularity')
    const navigate = useNavigate();

    const toggle = () => setCollapse(!collapse);
    const [showMenu, setShowMenu] = useState(false)

    const handleClick =() =>{
     navigate('/productDetail')  
    }

    const banners = [
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },
        { image: image1, title: 'WALTHER LG500 M ITEC RE M', mainPrice: '377503.0', discountPrice: '370010.0' },]

    return (
        <div className='container'>
            <div className='breadCrupmpsDiv d-md-block d-none'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className='breadCrumpsText'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active className='breadCrumpsText'>Product</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='productPageMainHeading '>NEW AIR RIFLES</div>
            <div className='d-flex justify-content-between align-items-center w-100'>
                <div className='productsCount'>24 Products</div>
                <div className='resetbtnmainDiv'>
                    <div className='d-flex justify-content-between align-items-center' style={{ gap: '10px' }}>
                        <img src={resetIcon} />
                        <div className='productResetText'>Reset</div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center' style={{ gap: '10px' }}>
                        <div className='sortText1'>Sort By:</div>
                        <Dropdown className="rbCustomDropdown">
                            <Dropdown.Toggle
                                variant=""
                                className="rbDropdownToggle d-flex align-items-center justify-content-between"
                            >
                                <span>{selected}</span>
                                <img src={expandIcon} alt="expand" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="rbDropdownMenu">
                                <Dropdown.Item onClick={() => setSelected('Popularity')}>
                                    Popularity
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelected('Relevant')}>
                                  Relevant
                                </Dropdown.Item>
                               
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>

            <div className='mobileFiltersDiv'>
                <div className='mobileFiltersDiv1'>
                    <img src={sortImage} alt="sort" />
                    <div className='sortText'>Sort:</div>
                    <Dropdown className='customDropdownFilters'>
                        <div>
                            <Dropdown.Toggle variant='' className="d-flex justify-content-between" style={{ gap: '16px' }}>
                                <div className='dropdownText'>{sortBy} </div>
                                <img src={expandIcon} />

                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setSortBy('Popularity')}>
                                    Popularity
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSortBy('Price: Low to High')}>
                                    Price: Low to High
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSortBy('Price: High to Low')}>
                                    Price: High to Low
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </div>
                    </Dropdown>
                </div>

                <div className='mobileFiltersDiv2'>
                    <img className='' src={filterImage} />
                    <div className='sortText' role='button' onClick={() => setShowMenu(true)}>Filters</div>
                </div>
            </div>

            {/* offcanvas */}
            <div
                className={`offcanvas offcanvas-end  ${showMenu ? 'show' : ''}`}
                tabIndex="-1"
                style={{
                    visibility: showMenu ? 'visible' : 'hidden', width: '343px', zIndex: '9999', overflowY: 'auto',

                }}
            >
                <div className="offcanvas-header  mt-4 d-flex justify-content-between">
                    <h5 className="offcanvas-title ">
                        <div className='productpageOffcanvasHeader'>
                            FILTERS
                        </div>
                    </h5>
                    <div
                        type="button"
                        className=''
                        onClick={() => setShowMenu(false)}
                    ><img src={cancleIcon} /></div>
                </div>

                <div className="offcanvas-body">
                    <Filters />

                </div>
                <div className='productOffcanvasBtnDiv'>
                    <button className='productOffcanvasBtn1'>Apply</button>
                    <button className='productOffcanvasBtn2'>Reset</button>
                </div>
            </div>

            <div className='d-flex justify-content-between' style={{ gap: '26px' }}>
                <div className='filtersSticky'>
                    <Filters />
                </div>
                <div className='row'>
                    {
                        banners.map((item, index) => (
                            <div className='col-lg-4 col-md-6 col-12 productGrid' key={index}>
                               <div role='button' onClick={handleClick}>
                                 <ProductCard
                                    imgSrc={item.image}
                                    title={item.title}
                                    mainPrice={item.mainPrice}
                                    discountPrice={item.discountPrice}
                                    
                                />
                               </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Productpage
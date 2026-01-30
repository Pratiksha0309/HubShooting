import React from 'react'
import vector from '../../assets/Vector 1.svg'
import gunImage1 from '../../assets/image 23.png'
import arrowImage from '../../assets/Arrow 2.svg'
import pistolImage from '../../assets/pistolImage.png';
import accesories from '../../assets/accesories.png';


const ShopByCategory = () => {
    return (
        <div className='container mt-5 shopCategoryMainDIv'>
            <p className='mainHeading'>Shop BY CATEGORIES</p>
            <div className='row gap-md-0  gap-4'>
                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='shopCategoryDiv'>
                        <img className='vectorImage' src={vector} />
                        <img className='gunImage w-100' src={gunImage1} />
                        <div className='mt-auto'>
                            <p className='shopCategoryHeding'>Air Rifles</p>
                            <p className='shopCategorySubHeding'>Precision in Every Shot</p>
                            <img className='arrowImg' src={arrowImage} />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 '>
                    <div className='shopCategoryDiv'>
                        <img className='vectorImage' src={vector} />
                        <img className='gunImage w-100 mt-3' src={pistolImage} />
                        <div className='mt-auto'>
                            <p className='shopCategoryHeding'>Air Pistols</p>
                            <p className='shopCategorySubHeding'>Precision in Every Shot</p>
                            <img className='arrowImg' src={arrowImage} />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mt-lg-0 mt-md-4 mt-0'>
                    <div className='shopCategoryDiv'>
                        <img className='vectorImage' src={vector} />
                        <img className='gunImage' src={accesories} />
                        <div className='mt-auto'>
                            <p className='shopCategoryHeding'>Accessories</p>
                            <p className='shopCategorySubHeding'>Precision in Every Shot</p>
                            <img className='arrowImg' src={arrowImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopByCategory
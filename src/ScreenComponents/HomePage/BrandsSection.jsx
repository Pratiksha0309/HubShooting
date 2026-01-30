import React from 'react'
import brand1 from '../../assets/image 12.png';
import brand2 from '../../assets/image 12 (1).png';
import brand3 from '../../assets/image 12 (2).png';
import brand4 from '../../assets/image 12 (3).png';
import brand5 from '../../assets/image 12 (4).png';
import brand6 from '../../assets/image 12 (5).png';
import brand7 from '../../assets/image 12 (6).png';
import brand8 from '../../assets/image 12 (7).png';

const BrandsSection = () => {
    const brands = [
        { image: brand1, title: 'SISU' },
        { image: brand2, title: 'AHG-ANSCHUETZ' },
        { image: brand3, title: 'CARL-WALTHER GMBH' },
        { image: brand4, title: 'CARL-WALTHER GMBH' },
        { image: brand5, title: 'HSEPL' },
        { image: brand6, title: 'CENTRA' },
        { image: brand7, title: 'ZHUHAI QIANG YUAN SPORTS' },
        { image: brand8, title: 'OLD AIR WEAPONS' },
    ]
    return (
        <div className='container mt-5 brandsMainDiv'>
            <p className='brandMainHeading'>all BRANDS</p>
            <div className='row'>
                {
                    brands.map((item, index) => (
                        <div className='col-lg-3 col-md-4 col-6' key={index}>
                            <div className='brandsDiv'>
                                <img src={item.image} alt='abc' />
                                <p className='brandsDivText'>{item.title}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default BrandsSection
import React from 'react'
import instalogo from '../../assets/Instalogo.svg'
import image1 from '../../assets/Rectangle 96.png'
import image2 from '../../assets/Rectangle 97.png'
import image3 from '../../assets/Rectangle 100.png'


const SportsHubSection = () => {
    const images = [
        { image: image1 },
        { image: image1 },
        { image: image1 },
        { image: image1 },
        { image: image1 },
        { image: image1 },
        { image: image1 },
        { image: image1 },
    ]

    return (
        <div className='container mt-5 sportsMaindiv'>
            <div className='featuredMainDiv w-100'>
                <div className='w-100'>
                    <div className='d-flex justify-content-between '>
                        <p className='mainHeading'>Explore hub sports world</p>
                        <button className='viewAllBtn'> <img src={instalogo} alt='' /> &nbsp; follow Us</button>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                {
                    images.map((item, index) => (
                        <div className='col-lg-3 col-4 mb-4' key={index} >
                            <img src={item.image} alt='sport' className='w-100 object-fit-cover' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SportsHubSection
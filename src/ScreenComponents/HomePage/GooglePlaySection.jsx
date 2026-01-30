import React from 'react'
import image1 from '../../assets/Playstore.svg'
import playstoreImage from '../../assets/Playstore.svg'

const GooglePlaySection = () => {
  return (
    <div className='row f container'>
      <div className='col-lg-6 col-12 '>
        <div className='d-flex flex-column justify-content-center align-items-start gap-2 googlePlayFirstDiv'>
          <p className='googlePlayMainText'>Everything a shooter needs, all in one app.</p>
          <p className='googleplayDesc'>
            Your trusted destination for shooting gear and accessories. Book maintenance and service directly from the app.
          </p>
          <div className='d-flex gap-3 align-items-center flex-wrap'>
            <button className='googleplaybtn'>
              <div className='d-flex gap-1'>
                <img src={playstoreImage} className='googleplayLogo' />
                <div className='d-flex flex-column gap-1'>
                  <p className='googleplaybtnFirstText'>GET IT ON</p>
                  <p className='googleplaybtnSecondText'>Google Play</p>
                </div>
              </div>
            </button>
            <button className='googleplaybtn'>
              <div className='d-flex gap-1'>
                <img src={playstoreImage} className='googleplayLogo' />
                <div className='d-flex flex-column gap-1'>
                  <p className='googleplaybtnFirstText'>GET IT ON</p>
                  <p className='googleplaybtnSecondText'>Google Play</p>
                </div>
              </div>
            </button>
          </div>
        </div>

      </div>
      <div className='col-lg-6 col-12 ' >
        <div className='googlePlaySecDiv '>
          <img src={image1} alt='image1' className='w-100 object-fit-contain h-100' />
        </div>
      </div>
    </div>
  )
}

export default GooglePlaySection
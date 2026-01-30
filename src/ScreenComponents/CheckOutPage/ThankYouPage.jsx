import React from 'react'
import logo from '../../assets/ThankYoulogo.png'

const ThankYouPage = () => {
  return (
    <div className='container'>
   <div className='d-flex flex-column justify-content-center align-items-center'>
       <img src={logo} style={{marginTop:'26px'}}/>
       <div className='thankYouText'>Thank You !!!</div>
       <div className='orderPlacedText'>Your ordered was successfully placed</div>
       <button className='viewOrderbtn'>View Your Order</button>
   </div>
    </div>
  )
}

export default ThankYouPage
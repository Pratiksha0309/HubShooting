import ruppesicon from '../../assets/fa_rupee.svg'
import Form from 'react-bootstrap/Form';
import plusIcon from '../../assets/material-symbols_add-rounded.svg'
import minusIcon from '../../assets/ic_round-minus.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductInformation = () => {
  const navigate = useNavigate();
  const [chkChecked, setChkChecked] = useState('chk1');

  const [count, setCount] = useState(5);

  const handleIncrease = () => {
    setCount(prev => (prev + 1))
  }

  const handleDecrease = () => {
    setCount(prev => (prev > 1 ? prev - 1 : 1));
  };


  const handleClick = () => {
    navigate('/cart')
  }

  return (
    <div className='productInfoMainDiv'>
      <div className='productTitle'>LG500 itec Anatomic M </div>
      <div className='productChkDiv d-flex flex-lg-column flex-md-row flex-column'>
        {/* <div className='productInfopriceDiv w-100'> */}
        <div className={chkChecked === 'chk1' ? 'productInfopriceDiv' : 'productInfopriceDiv1'}>
          <div className='productInfopriceInnerDiv'>
            <div className='d-flex flex-column align-items-start' style={{ gap: '10px' }}>
              <div className='productInfopriceText'>Pay Full Price</div>
              <div className='productInfoprice d-flex align-items-center' style={{ gap: '2px' }}><img src={ruppesicon} className='productInfoRuppesIcon' /> 370010.0</div>
            </div>
            <div className='productInfopriceGst'>(+18% GST)</div>
          </div>
          <div className='s'>
            <input
              type="radio"
              id="default-radio-1"
              name="radioGroup"
              checked={chkChecked === 'chk1'}
              onChange={() => setChkChecked('chk1')}
            />
          </div>

        </div>
        <div className={chkChecked === 'chk2' ? 'productInfopriceDiv' : 'productInfopriceDiv1'}>
          <div className='productInfopriceInnerDiv'>
            <div className='d-flex flex-column align-items-start' style={{ gap: '10px' }}>
              <div className='productInfopriceText'>Pay Booking Price</div>
              <div className='productInfoprice d-flex align-items-center' style={{ gap: '2px' }}><img src={ruppesicon} className='productInfoRuppesIcon' /> 370010.0</div>
            </div>
          </div>
          <div className=''>
            <input
              type="radio"
              id="default-radio-2"
              name="radioGroup"
              checked={chkChecked === 'chk2'}
              onChange={() => setChkChecked('chk2')} />
          </div>
        </div>
      </div>
      <div className='productInfoDesc'>
        For Renowned Shooter the GST will be exempted. Kindly upload your documents in My Account/Profile
      </div>

      <div className='quntityDiv'>
        <div className='quntityText'>Quantity</div>
        <div className='quntityFirstDiv'>
          <div className='quntityInnerDiv'>
            <div role='button' onClick={handleDecrease}><img src={minusIcon} /></div>
            <div className='quntityDivCountValue'>{count}</div>
            <div role='button' onClick={ handleIncrease}><img src={plusIcon} /></div>
          </div>
          <button className='addToCartBtn' onClick={handleClick}>Add To Cart</button>
        </div>
      </div>
      <hr />
      <div className='productInfoSecDiv'>
        <div className='productInfoSecDivTitle'>LG500 itec Anatomic M</div>
        <div className='productInfoSecDivDesc'>The first rifle in which barrel and action are perfectly free from tension when
          fitted to a wooden stock – a milestone in both engineering and design. A true
          revelation in accuracy and shooting stability</div>
      </div>
      <hr />
    </div>
  )
}

export default ProductInformation
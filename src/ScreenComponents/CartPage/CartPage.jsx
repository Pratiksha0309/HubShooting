import React, { useState } from 'react'
import './CartStyle.scss'
import { Breadcrumb } from 'react-bootstrap'
import cartIcon from '../../assets/mdi_cart.svg'
import image1 from '../../assets/gunImage.png'
import plusIcon from '../../assets/material-symbols_add-rounded.svg'
import minusIcon from '../../assets/ic_round-minus.svg'
import deleteIcon from '../../assets/delete.svg'
import ruppesIcon from '../../assets/fa_rupee.svg'
import ruppesIcon1 from '../../assets/fa_rupeeSecondary.svg'
import discountRuppesIcon from '../../assets/fa_rupee Red.svg'
import crossIcon from '../../assets/codex_cross (1).svg'
import couponsIcon from '../../assets/f7_tickets-fill.svg'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
    const [count, setCount] = useState(5);
    const [chkChecked, setchkChecked] = useState(false)
    const navigate = useNavigate();

    const handleIncrease = () => {
        setCount(prev => (prev + 1))
    }

    const handleDecrease = () => {
        setCount(prev => (prev > 1 ? prev - 1 : 1));
    };
    const handleCheckOut = () => {
        navigate('/checkOut')
    }

    return (
        <div className='container'>
            <div className='breadCrupmpsDiv d-md-block d-none'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className='breadCrumpsText'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active className='breadCrumpsText'>Cart</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='row cartDiv'>
                <div className='col-lg-7 col-12'>
                    <div className='cartFirstDiv'>
                        <div className='d-flex justify-content-between'>
                            <div className='cartFirstDivHeading'><img src={cartIcon} />My Shopping Cart <span className='d-lg-none d-block'>(2)</span></div>
                            <div className='cartFirstDivHeading d-lg-block d-none'>2 Items</div>
                        </div>
                        <hr className='cartHorizontalGap' />
                        <div className=' justify-content-between d-lg-flex d-none'>
                            <div className='cartTotalText'>Product Details</div>
                            <div className='cartTotalText'>Total</div>
                        </div>
                        <hr className='cartHorizontalGap d-lg-block d-none' />

                        <div className='cartItemsDiv'>
                            <div className='cartItemsFirstDiv'>
                                <div className='cartImgDiv'>
                                    <img src={image1} className='w-100 h-100 object-fit-contain' />
                                </div>
                                <div className='d-flex flex-column  justify-content-between cartCountInnerDiv' >
                                    <div className='cartProductTitle'>WALTHER LG500 ITECRE M</div>
                                    <div className='cartCountDiv'>
                                        <div role='button' onClick={handleDecrease}><img src={minusIcon} /></div>
                                        <div className='cartCount'>{count}</div>
                                        <div role='button' onClick={handleIncrease}><img src={plusIcon} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='cartItemsSecDiv'>
                                <div className='d-lg-none d-block'><img src={crossIcon} /> </div>
                                <div className='d-flex gap-1 cartRemoveText d-lg-block d-none'>Remove <img src={deleteIcon} /></div>
                                <div className='cartProductPrice d-lg-flex align-items-center mt-auto  d-none'><img src={ruppesIcon} className='cartRuppesIcon' /> 36000</div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='col-lg-5 col-12 '>
                    <div className='cartSecDiv'>
                        <div className='orderSummaryText d-lg-block d-none cartSecDivGap'>Order Summary</div>
                        <div className={chkChecked ? 'cartrenownedDivActive' : 'cartrenownedDiv'}>
                            <input
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onChange={(e) => setchkChecked(e.target.checked)}
                            />
                            <div className={chkChecked ? 'cartrenownedTextActive' : 'cartrenownedText'}>I am a renowned owner </div>
                        </div>
                        <hr className='cartHorizontalGap' />
                        <div className='ordersummaryPriceSection cartSecDivGap'>
                            <div className='orderSummarySectionHeading'>PRICE DETAILS (4 Items)</div>
                            <div className='d-flex justify-content-between'>
                                <div className='orderSummaryPriceText'>Price</div>
                                <div className='orderSummaryPriceText d-flex align-items-center'><img src={ruppesIcon1} /> <span> 377503.0</span></div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='orderSummaryPriceText'>Discount</div>
                                <div className='orderSummaryDiscountText d-flex align-items-center'><img src={discountRuppesIcon} /> <span> -7575</span></div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='orderSummaryPriceText'>Delivery Charges</div>
                                <div className='orderSummaryPriceText d-flex align-items-center'><img src={ruppesIcon1} /> <span> 377503.0</span></div>
                            </div>
                        </div>
                        <hr className='cartHorizontalGap' />
                        <div className='d-flex justify-content-between cartSecDivGap'>
                            <div className='orderSummarySectionHeading '>TOTAL AMOUNT (4 Items)</div>
                            <div className='orderSummarySectionHeading d-flex align-items-center'><img src={ruppesIcon} /> 370010.0</div>
                        </div>
                        <div className='applyCoupensDiv cartSecDivGap'>
                            <div className='applyCoupensDivHeading '><img src={couponsIcon} /> &nbsp; Apply Coupons</div>
                            <div className='applyCoupensBtnDiv'>
                                <input className='applyCoupensBtnDivInput' />
                                <button className='applyCoupensBtn'>Apply</button>
                            </div>

                        </div>
                        <hr className='cartHorizontalGap' />
                        <div className='orderSummarySaveOrderText cartSecDivGap'>You will save ₹ 37000.0 on this order.</div>
                        <hr className='cartHorizontalGap' />
                       <button className='buynowbtn ' onClick={handleCheckOut}>Buy Now</button>

                    </div>
                    </div>
            </div>
        </div>
    )
}

export default CartPage
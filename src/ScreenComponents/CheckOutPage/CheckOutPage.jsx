import { Breadcrumb } from 'react-bootstrap';
import './CheckOutPage.scss';
import locationIcon from '../../assets/location_pin.svg'
import { useState } from 'react';
import activeLocationIcon from '../../assets/location_pin_active.svg'
import inactiveLoctionIcon from '../../assets/location_pin_inactive.svg'
import plusIcon from '../../assets/plus_icon.svg'
import BillingForm from './BillingForm';
import ShippingForm from './ShippingForm';
import couponsIcon from '../../assets/f7_tickets-fill.svg'
import ruppesIcon from '../../assets/fa_rupee.svg'
import ruppesIcon1 from '../../assets/fa_rupeeSecondary.svg'
import discountRuppesIcon from '../../assets/fa_rupee Red.svg'
import { useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const [chkChecked, setchkChecked] = useState('chk1')
    const navigate = useNavigate();
    const handleOrderPlaced = () => {
        navigate('/orderPlaced');
    }

    return (
        <div className='container'>
            <div className='breadCrupmpsDiv d-lg-block d-none'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className='breadCrumpsText'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active className='breadCrumpsText'>Checkout</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='row checkOutDiv d-flex'>
                <div className='col-lg-7 col-12 order-lg-1 order-2'>

                    <div className='checkOutFirstDiv'>
                        <div className="w-100 d-flex flex-column" style={{ gap: '6px' }}>
                            <div className='d-flex justify-content-between'>
                                <div className='checkOutHeadings d-flex align-items-center justify-content-start' style={{ gap: '7px' }}><img src={locationIcon} /><span className='d-lg-block d-none'>Select</span> Delivery Address</div>
                                <div className='checkOutHeadings d-lg-block d-none'>2 Items</div>
                            </div>
                            <div className='checkOutDesc d-lg-block d-none' style={{ marginLeft: '27px' }}>Choose an address to deliver your order</div>
                        </div>

                        <div className={chkChecked === 'chk1' ? 'checkOutAddressActive' : 'checkOutAddressDiv'}>
                            <div className='checkOutAddressInnerDiv'>
                                <div>
                                    <input
                                        type="radio"
                                        value=""
                                        id="flexCheckDefault"
                                        checked={chkChecked === 'chk1'}
                                        onChange={() => setchkChecked('chk1')} />
                                </div>
                                <div className={'checkOutAddress'}>
                                    <div className={`${chkChecked ? 'checkOutSubHeadingsActive' : 'checkOutSubHeadings'} d-flex align-items-center`}>
                                        <img src={chkChecked ? activeLocationIcon : inactiveLoctionIcon} />
                                        Home
                                    </div>
                                    <div className='d-flex  align-items-end align-self-stretch' style={{ gap: '16px' }}>
                                        <div className='checkOutHeadings'>John Doe</div>
                                        <div className='checkOutAddressText'>+91 9876543210</div>
                                    </div>
                                    <div className='checkOutAddressText'>123 Main Street, Near Central Park, Mumbai, maharashtra - 400001</div>
                                </div>
                            </div>
                            <div className='d-lg-none d-flex justify-content-between w-100' style={{ gap: '16px' }}>
                                <button className='checkOutAddressbtn w-50'>Edit</button>
                                <button className='checkOutAddressbtn w-50'>Remove</button>
                            </div>
                        </div>

                        <div className={chkChecked === 'chk2' ? 'checkOutAddressActive' : 'checkOutAddressDiv'}>
                            <div className='checkOutAddressInnerDiv'>
                                <div>
                                    <input
                                        type="radio"
                                        value=""
                                        id="flexCheckDefault1"
                                        checked={chkChecked === 'chk2'}
                                        onChange={() => setchkChecked('chk2')} />
                                </div>
                                <div className={'checkOutAddress'}>
                                    <div className={`${chkChecked ? 'checkOutSubHeadingsActive' : 'checkOutSubHeadings'} d-flex align-items-center`}>
                                        <img src={chkChecked ? activeLocationIcon : inactiveLoctionIcon} />
                                        Home
                                    </div>
                                    <div className='d-flex  align-items-end align-self-stretch' style={{ gap: '16px' }}>
                                        <div className='checkOutHeadings'>John Doe</div>
                                        <div className='checkOutAddressText'>+91 9876543210</div>
                                    </div>
                                    <div className='checkOutAddressText'>123 Main Street, Near Central Park, Mumbai, maharashtra - 400001</div>
                                </div>
                            </div>
                            <div className='d-lg-none d-flex justify-content-between w-100' style={{ gap: '16px' }}>
                                <button className='checkOutAddressbtn w-50'>Edit</button>
                                <button className='checkOutAddressbtn w-50'>Remove</button>
                            </div>
                        </div>

                    </div>

                    <button className='checkoutAddressBtn' ><img src={plusIcon} />Add New Address</button>
                    <div className='d-lg-flex flex-column d-none'>
                        <BillingForm />
                        <ShippingForm />
                    </div>

                </div>

                <div className='col-lg-5 col-12 order-lg-2 order-1'>
                    <div className='chectOutSecDiv'>
                        <div className='orderSummaryText d-lg-block d-none'>Order Summary</div>
                        <div className='applyCoupensDiv d-lg-block d-none'>
                            <div className='applyCoupensDivHeading'><img src={couponsIcon} /> &nbsp; Apply Coupons</div>
                            <div className='applyCoupensBtnDiv'>
                                <input className='applyCoupensBtnDivInput' />
                                <button className='applyCoupensBtn'>Apply</button>
                            </div>
                        </div>

                        <hr className='checkoutHorizontalGap d-lg-block d-none' />

                        <div className='ordersummaryPriceSection'>
                            <div className='orderSummarySectionHeading d-flex'>PRICE DETAILS &nbsp;<span className='d-lg-flex d-none'>(4 Items)</span> </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='orderSummaryPriceText'>Price</div>
                                <div className='orderSummaryPriceText d-flex align-items-center'><img className='ruppesImg' src={ruppesIcon1} /> <span> 377503.0</span></div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='orderSummaryPriceText'>Discount</div>
                                <div className='orderSummaryDiscountText d-flex align-items-center'><img className='ruppesImg' src={discountRuppesIcon} /> <span> -7575</span></div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='orderSummaryPriceText'>Delivery Charges</div>
                                <div className='orderSummaryPriceText d-flex align-items-center'><img className='ruppesImg' src={ruppesIcon1} /> <span> 377503.0</span></div>
                            </div>
                        </div>
                        <hr className='cartHorizontalGap' />
                        <div className='d-flex justify-content-between'>
                            <div className='orderSummarySectionHeading '>TOTAL AMOUNT (4 Items)</div>
                            <div className='orderSummarySectionHeading d-flex align-items-center'><img src={ruppesIcon} /> 370010.0</div>
                        </div>
                        <hr className='checkoutHorizontalGap d-lg-none d-block' />
                        <button className='buynowbtn d-lg-flex d-none' onClick={handleOrderPlaced}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage
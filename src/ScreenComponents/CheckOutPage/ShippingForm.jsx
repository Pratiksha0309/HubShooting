import React from 'react'
import './BillingForm.scss';
import { useForm } from 'react-hook-form'

const ShippingForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data)

    return (
        <div className=''>
            <div className='shippingFirstDiv'>
                <div className='shippingFirstDivText'>Shipping Address</div>
                <div className='d-flex align-items-center' style={{gap:'6px'}}>
                    <input
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        // onChange={(e) => setchkChecked(e.target.checked)}
                    />
                    <label className='shippingFirstChktext'>Same as Billing Address</label>
                </div>
            </div>
            <div className='billingFormFirstDiv'>
                <div className='d-flex flex-column' style={{ gap: '6px' }}>
                    <div className='checkOutHeadings'>Shipping Address</div>
                    <div className='checkOutDesc'>Enter your delivery details below</div>
                </div>
                <div>
                    <form className='billing-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="billing-form-field">
                            <label htmlFor="name" className='billing-form-Label'>Full Name<span className='text-danger'>*</span></label>
                            <input id="name" name="name" className='billing-form-Input'
                                {...register("name", { required: true })} />
                            {errors.name && <span className='billing-error-text'>Please Enter Name</span>}
                        </div>

                        <div className='billing-form-two-field'>
                            <div className="billing-form-field">
                                <label className='billing-form-Label'>
                                    Email Id <span className='text-danger'>*</span>
                                </label>

                                <input type="email" className='billing-form-Input'
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value:
                                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Please enter a valid email address",
                                        },
                                    })}
                                />
                                {errors.email && (<span className="billing-error-text">
                                    {errors.email.type === "required" ? "Please enter email" : errors.email.message}
                                </span>
                                )}
                            </div>

                            <div className="billing-form-field">
                                <label htmlFor="mobile" className='billing-form-Label'>Mobile Number<span className='text-danger'>*</span></label>
                                <input id="mobile" name="mobile" className='billing-form-Input' inputMode='numeric'
                                    maxLength={10}
                                    {...register("mobile", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: 'Please enter valid mobile number'
                                        },
                                        onChange: (e) => {
                                            e.target.value = e.target.value.replace(/\D/g, '');
                                        },
                                    })}
                                />
                                {errors.mobile && (
                                    <span className="billing-error-text">
                                        {errors.mobile.type === "required" ? "Please enter mobile number" : errors.mobile.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="billing-form-field">
                            <label htmlFor="address" className='billing-form-Label'>Full Address<span className='text-danger'>*</span></label>
                            <textarea id="address" name="address" className='billing-form-Input' style={{ height: '75px' }}
                                {...register("address", { required: true })} />
                            {errors.address && <span className='billing-error-text'>Please enter your address</span>}
                        </div>

                        <div className='billing-form-two-field'>
                            <div className="billing-form-field">
                                <label htmlFor="landmark" className='billing-form-Label'>Landmark</label>
                                <input id="landmark" name="landmark" className='billing-form-Input' />
                            </div>
                            <div className="billing-form-field">
                                <label htmlFor="pincode" className='billing-form-Label'>Pin Code<span className='text-danger'>*</span></label>
                                <input id="pincode" name="pincode" className='billing-form-Input'
                                    maxLength={6}
                                    {...register("pincode", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]{6}$/,
                                            message: 'Please enter valid pin code'
                                        },
                                        onChange: (e) => {
                                            e.target.value = e.target.value.replace(/\D/g, '');
                                        },
                                    })}
                                />
                                 {errors.pincode && (
                                    <span className="billing-error-text">
                                        {errors.mobile.type === "required" ? "Please enter pincode" : errors.pincode.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className='billing-form-two-field'>
                            <div className="billing-form-field">
                                <label htmlFor="city" className='billing-form-Label'>City</label>
                                <input id="city" name="city" className='billing-form-Input' />
                            </div>

                            <div className="billing-form-field">
                                <label htmlFor="state" className='billing-form-Label'>State<span className='text-danger'>*</span></label>
                                <input id="state" name="state" className='billing-form-Input'
                                    {...register("state", { required: true })} />
                                {errors.state && <span className='billing-error-text'>Please Enter State</span>}
                            </div>
                        </div>

                        <div className='billing-form-address-div'>
                            <label className="billing-form-Label">Select Address type</label>

                            <div className="address-type-options">
                                <label>
                                    <input type="radio" name="addressType" value="home" />
                                    Home
                                </label>

                                <label>
                                    <input type="radio" name="addressType" value="work" />
                                    Work
                                </label>

                                <label>
                                    <input type="radio" name="addressType" value="other" />
                                    Other
                                </label>
                            </div>
                        </div>

                        <div className='billing-form-btn-div'>
                            <button className='biiling-save-btn' type="submit">Save</button>
                            <button className='biiling-cancel-btn'>Cancel</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ShippingForm;
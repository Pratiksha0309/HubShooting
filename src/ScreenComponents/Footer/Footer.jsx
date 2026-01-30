import './style.scss'
import { Link } from 'react-router-dom';
import logo from '../../assets/mainLogo.png'
// import image1 from '../../assets/footerimage.png';
// import fblogo from '../../assets/fblogo.svg';
// import instalogo from '../../assets/instalogo.svg';
// import twitterlogo from '../../assets/twitterlogo.svg';
// import youtubelogo from '../../assets/youtubelogo.svg';
import phoneIcon from '../../assets/phone.svg'
import mailIcon from '../../assets/Email.svg'
import downloadIcon from '../../assets/download.svg'
import fblogo from '../../assets/facebook.svg';
import instalogo from '../../assets/instagram.svg';
import announceMentIcon from '../../assets/grommet-icons_announce.svg'

const Footer = () => {
    const footerLinksData = [
        {
            title: 'Categories',
            links: [
                { name: 'Buy New Rifles', url: '/' },
                { name: 'Buy New Pistols', url: '/' },
                { name: 'Kids Buy Old Pistols', url: '/' },
                { name: 'Buy New Rifles', url: '/' },
                { name: 'Buy New Pistols', url: '/' },
                { name: 'Kids Buy Old Pistols', url: '/' },],
        },
        {
            title: 'Important Links',
            links: [
                { name: 'About Us', url: '/' },
                { name: 'Contact Us', url: '/' },
                { name: 'News', url: '/' },
                { name: 'Blogs', url: '/' },
                { name: 'Return & Cancellation Policy', url: '/' },
                { name: 'Privacy Policy', url: '/' },
                { name: 'Shipping & Delivery Policy', url: '/' },
                { name: 'Find Dealers', url: '/' },
            ],
        },
    ];

    const categoryLinks = footerLinksData.filter(item => item.title === "Categories").flatMap(item => item.links);
    const importantLinks = footerLinksData.filter(item => item.title === "Important Links").flatMap(item => item.links);


    return (
        <div className='footerDiv mt-5'>
            <div className=''>
                <div className='row d-flex justify-content-between '>
                    <div className='col-lg-3 col-md-6 col-12 mb-lg-0 mb-3 text-white'>
                        <div className='footerfirstDiv'>
                            <div className='d-flex gap-lg-5 gap-2'>
                                <img src={logo} className='logo' />
                                <div>
                                    <p className='footerTitle'>Hub Sports</p>
                                    <p className='footerSubtitle'>Equipment Pvt Ltd</p>
                                </div>
                            </div>
                            <div className='subHeadings pe-3'>Hub Sports Equipment Pvt Ltd. has its own expertise in constructing and installing many shooting ranges of all events as per International Shooting Sports Federations rules and regulations in almost all parts of country and which are doing well with respect to the infrastructure and its maintenance.</div>
                            <div className='d-flex gap-2 flex-column d-lg-block d-none'>
                                <div className='row'>
                                    <div className='col-2'><img src={phoneIcon} alt='icon' /></div>
                                    <div className='col-5 subHeadings1'>Customer Care </div>
                                    <div className='col-5 contactNoText'>: +91 9175986669 </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2'></div>
                                    <div className='col-5 subHeadings1'>Sales</div>
                                    <div className='col-5 contactNoText'>: +91 9175986669 </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2'></div>
                                    <div className='col-5 subHeadings1'>Service </div>
                                    <div className='col-5 contactNoText'>: +91 9175986669 </div>
                                </div>
                            </div>
                           <div className='d-lg-flex d-none'>
                             <div className='row'>
                                <div className='col-2'><img src={mailIcon} alt='icon' /></div>
                                <div className='col-3 subHeadings1'>Email                      </div>
                                <div className='col-4 contactNoText'>hubshootingsports@gmail.com </div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className='col-lg-3  col-md-6 col-12'>
                        <p className='headings' style={{marginBottom:'30px'}}>Categories</p>
                        {categoryLinks.map((link, index) => (
                            <div key={index}>
                                <p className='subHeadings' style={{marginBottom:'12px'}}>    {link.name}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className='col-lg-3  col-md-6 col-12'>
                        <p className='headings' style={{marginBottom:'30px'}}>Important Links</p>

                        {importantLinks.map((link, index) => (
                            <div key={index}>
                                <p className='subHeadings' style={{marginBottom:'12px'}}>    {link.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className='col-lg-3  col-md-6 col-12'>
                        <div className='d-flex flex-column gap-5'>
                            <div className='d-flex flex-column '>
                                <p className='headings' style={{marginBottom:'30px'}}>News Letter</p>
                                <input className='emailInput' placeholder='Email ID' style={{marginBottom:'20px'}} />
                                <button className='signUpBtn'>Sign Up</button>
                            </div>
                            <div className='mt-lg-0 mt-4'>
                                <p className='headings' style={{marginBottom:'30px'}}>Downloads</p>
                                <p className='contactNoText1' style={{marginBottom:'10px'}}><img src={downloadIcon} alt='image1' /> Authority Letters For Shooters</p>
                                <p className='contactNoText1'><img src={downloadIcon} alt='image1' /> Required Documents</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='row my-md-5 my-3 d-flex justify-content-between'>
                    <div className='col-md-4 col-12'>
                        <p className='headings'>Store Location</p>
                        <p className='subHeadings' style={{marginTop:'16px'}}>Office No. 8th, 3rd Floor, Vision One Park, Bhansali Circuit Rd, Wakad, Pune, Maharashtra 411033 </p>
                    </div>


                    <div className='col-md-8 col-12 mt-2 d-md-flex justify-content-end'>
                        <div className='d-flex gap-lg-5 gap-4'>
                                <div className=''>
                                    <p className='headings' style={{marginBottom:'16px'}}>Office Hours</p>
                                    <p className='subHeadings'>Mon - Sat (9AM - 6PM) </p>
                                    <p className='subHeadings'>Sunday: Closed</p>
                                </div>
                                <div className=''>
                                    <div>
                                        <p className='headings d-flex align-items-center' style={{marginBottom:'16px'}}><img src={announceMentIcon} alt='annoucemnt' />&nbsp; Follow Us</p>
                                        <div className='d-flex gap-2'>
                                            <img src={instalogo} alt='logo' />
                                            <img src={fblogo} alt='logo' />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <hr className='border' />
                <div className='d-flex flex-md-row flex-column justify-content-md-between align-items-center'>
                    <p className='contactNoText text-center'>© Copyright 2025 | Hub Sports Equipment Pvt Ltd.</p>
                    <p className='contactNoText'>Powered by Onecorps Digital Pvt. Ltd</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
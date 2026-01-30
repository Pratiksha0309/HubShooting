import './navstyle.scss'
import logo from '../../assets/mainLogo.png'
import dropDownIcon from '../../assets/expand_more.svg'
import { Card, Collapse, NavDropdown } from 'react-bootstrap';
import settingLogo from '../../assets/settingIcon.svg'
import searchIcon from '../../assets/search.svg'
import cartIcon from '../../assets/mdi_cart.svg';
import notifiction from '../../assets/notifications.svg'
import profile from '../../assets/Vector.svg'
import menuIcon from '../../assets/menu.svg'
import groupIcon from '../../assets/Group.svg'
import expandIcon from '../../assets/expand_more1.svg'
import { useState } from 'react';
import cancleIcon from '../../assets/cancel.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const toggle = () => setCollapse(!collapse);

  return (
    <div className='mainNavDiv'>
      {/* first div */}
      <div className='d-flex justify-content-between gap-1 align-items-center'>
        <img
          className='menuIcon'
          src={menuIcon}
          alt=''
          onClick={() => setShowMenu(true)}
          style={{ cursor: 'pointer' }}
        />
        <img src={logo} alt='logo' className='logo' />
      </div>

      {/* second div */}
      <div className='navSecondDiv'>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={
            <div className='customDropdown'>
              New Sports Air guns
              <img src={dropDownIcon} alt="Logo" />{' '}
            </div>
          }>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={
            <div className='customDropdown'>
              Old Sports Air Guns
              <img src={dropDownIcon} alt="Logo" />{' '}
            </div>
          }>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={
            <div className='customDropdown'>
              Accessories
              <img src={dropDownIcon} alt="Logo" />{' '}
            </div>
          }>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        </NavDropdown>
        <div className='customDropdown'>Blog</div>
      </div>

      {/* third div */}
      <div className='navthirdDiv'>
        <div className='settingMainDiv'>
          <img src={settingLogo} alt='' className='settingImage' />
          <p className='settingText'>Service & Repair</p>
        </div>

        <div className='d-flex gap-3'>
          <div className='searchDiv'>
            <input className='searchInput' placeholder='Search' />
            <img className='icons' src={searchIcon} alt='' />
          </div>

          <div className='iconsDiv'>
            <img src={searchIcon} alt='icon' className='icons  d-md-none d-block' />
            <img src={cartIcon} alt='icon' className='icons' />
            <img src={notifiction} alt='icon' className='icons d-md-block d-none' />
            <img src={profile} alt='icon' className='icons' />
          </div>
        </div>

        <div
          className={`offcanvas offcanvas-start ${showMenu ? 'show' : ''}`}
          tabIndex="-1"
          style={{
            visibility: showMenu ? 'visible' : 'hidden', background: 'linear-gradient(165deg, #2D5F8D 0%, #719CD1 100%)', width: '343px'

          }}
        >
          <div className="offcanvas-header  mt-4 d-flex justify-content-between">
            <h5 className="offcanvas-title ">
              <div className='offcanvaHeader'>
                <img src={logo} className='offcanvaslogo' />
                <div>
                  <p className='offcanvasHeading'>Hub Sports</p>
                  <p className='offCanvasSubHeading'>Equipment Pvt Ltd</p>
                </div>
              </div>
            </h5>
            <div
              type="button"
              className=''
              onClick={() => setShowMenu(false)}
            ><img src={cancleIcon} /></div>
          </div>

          <div className="offcanvas-body">
            <div className='d-flex gap-3 flex-column'>
              <button className='offcanvasCollapsebtn w-100' onClick={toggle} >
                <div className='d-flex justify-content-between gap-2 align-items-center w-100 ' role='button' >
                  <div>
                    <img src={groupIcon} alt='icon' />&nbsp;
                    New Sports Air Guns
                  </div>
                  <img src={expandIcon} alt='icon' />
                </div>
              </button>

              <button className='offcanvasCollapsebtn w-100' >
                <div className='d-flex justify-content-between gap-2 align-items-center w-100 ' role='button' >
                  <div>
                    <img src={groupIcon} alt='icon' />&nbsp;
                    Old Sports Air Guns
                  </div>
                  <img src={expandIcon} alt='icon' />
                </div>
              </button>

              <button className='offcanvasCollapsebtn w-100' >
                <div className='d-flex justify-content-between gap-2 align-items-center w-100 ' role='button' >
                  <div>
                    <img src={groupIcon} alt='icon' />&nbsp;
                    Accessories
                  </div>
                  <img src={expandIcon} alt='icon' />
                </div>
              </button>

              <button className='offcanvasCollapsebtn w-100' >
                <div className='d-flex justify-content-between gap-2 align-items-center w-100 ' role='button' >
                  <div>
                    <img src={groupIcon} alt='icon' />&nbsp;
                    Blogs
                  </div>
                  <img src={expandIcon} alt='icon' />
                </div>
              </button>
              {/* <Collapse
                isOpen={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
                onExiting={onExiting}
                onExited={onExited}
              >

                <div>    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.</div>
              </Collapse> */}
            </div>
            <hr className='my-4' style={{ border: '1px solid #D9D9D9' }} />

            <button className='offcanvasCollapsebtn w-100' >
              <div className='d-flex justify-content-between gap-2 align-items-center w-100 ' role='button' >
                <div>
                  <img src={groupIcon} alt='icon' />&nbsp;
                  Service & Repair
                </div>
                <img src={expandIcon} alt='icon' />
              </div>
            </button>

            <div className='needHelpDiv mt-5'>
              <p className='needHelpHeading'>Need Help ?</p>
              <div className='d-flex flex-column gap-2 w-100'>
                <div className='row '>
                  <div className='col-12 d-flex justify-content-start w-100'>
                    <div className='col-6 needHelpHeading'>Customer Care </div>
                    <div className='col-6 needHelpContactNo'>: +91 9175986669 </div>
                  </div>
                </div>
                <div className='row '>
                  <div className='col-12 d-flex justify-content-start w-100'>
                    <div className='col-6 needHelpHeading'>Customer Care </div>
                    <div className='col-6 needHelpContactNo'>: +91 9175986669 </div>
                  </div>
                </div>
                <div className='row '>
                  <div className='col-12 d-flex justify-content-start w-100'>
                    <div className='col-6 needHelpHeading'>Customer Care </div>
                    <div className='col-6 needHelpContactNo'>: +91 9175986669 </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className='copyrightScetion'>
            <p className='copyrightText'>© Copyright 2025 | Hub Sports Equipment Pvt Ltd.</p>
            <p className='copyrightText'>Powered by Onecorps Digital Pvt. Ltd</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Navbar
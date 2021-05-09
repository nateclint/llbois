import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../firebase'

import Dialog from '@material-ui/core/Dialog';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import './Footer.css'


function Footer() {
  const [succeeded, setSucceeded] = useState(false)
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(null)

  const [email, setEmail] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()

    db
      .collection('emailSubcript')
      .doc(email)
      .set({
        isSubcripte: true
      })
      .then(response => {
        setSucceeded(true)
        setModalMessage('Thanks for subcripting us')
        handleOpen()
      })
      .catch(error => {
        setSucceeded(false)
        setModalMessage('Oh no. Something went wrong')
        handleOpen()
      })
    
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="shop-section-footer">
      <footer>
        <div className="ft-custom-1">
          <div className="container">
            <div className="wrapper row">
              <div className="wrap-left col-lg-10">
                <div className="newsletter row w-100">
                  <div className="col-10 row">
                    <h4 className="n-title" style={{color: '#fff', fontSize: 1+'rem'}}>BE IN TOUCH WITH US</h4>
                  </div>
                  
                </div>
              </div>
              <div className="wrap-right col-lg-2">
                <div className="list-social-icons">
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-google"></ion-icon>
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ft-custom-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 col-xl-3">
                <h4>CATEGORIES</h4>
                <div className="lists">
                  <ul>
                    <li><Link to="/womens">Women</Link></li>
                    <li><Link to="/mens">Men</Link></li>
                    <li><Link to="/">Accessories</Link></li>
                    <li><Link to="/shoes">Shoes</Link></li>
                    <li><Link to="/">New Arrivals</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3">
                <h4>BUY WITH US</h4>
                <div className="lists">
                  <ul>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Service</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                    <li><Link to="/">FAQs</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Cookie Policy</Link></li>
                    <li><Link to="/">Terms & Conditions</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3">
                <h4>ABOUT</h4>
                <div className="lists">
                  <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque at nulla ratione hic eum vero adipisci repudiandae earum quidem beatae laboriosam, nemo officia in a animi dignissimos? Voluptates, debitis porro! </span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3">
                <h4>CONTACT US</h4>
                <div className="lists">
                  <ul>
                    <li>ADDRESS: 44/9, Nguyen Thi Minh Khai, HCM</li>
                    <li>PHONE: (028) 37109999</li>
                    <li>WORK HOURS: 8am - 9pm</li>
                    <li>EMAIL: llbois.fashion@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ft-custom-3">
          <div className="container">
            <div className="ft-logo">
              <div className="logo">
                <a href="/">
                  <p className="logo-llbois">LLBois</p>
                </a>
              </div>

              <div className="copyright">
                <span>© LLBois 2020. All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Dialog
        open={open}
        fullWidth={true}
        maxWidth='xs'
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className='modal___message'>
          {
            succeeded
              ? <CheckCircleOutlineIcon style={{ color: '#54e346', fontSize: 3.5 + 'rem' }} />
              : <ErrorOutlineIcon color="secondary" style={{ fontSize: 3.5 + 'rem' }} />
          }
          <span style={{ color: `${succeeded ? '#54e346' : '#f50057'}` }}>{modalMessage}</span>
          <button className='btn btn-primary' onClick={handleClose}>Close</button>
        </div>
      </Dialog>
    </div>
  )
}


export default Footer
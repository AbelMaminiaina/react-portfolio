import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src="" alt="" /> */}
                <p>I am a fronted and backend developer from paris, France with 10 years of experience in companies like Ubitek, Wylog, Sneda</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    {/* <img src="" alt="" /> */}
                    <input type="email" placeholder='enter your email' />
                </div>
                <div className="footer-subscribe">Susbscribe</div>
            </div>
        </div>
        <hr></hr>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>&copy; 2023 Abel Maminiaina. All rights</p>            
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>

            </div>
        </div>
    </div>
  )
}

export default Footer
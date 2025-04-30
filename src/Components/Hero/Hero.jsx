import React from 'react'
import './Hero.css'
import profile from '../../assets/Profile2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id="home" className="hero">
        {/* <img src={profile} alt="" /> */}
        <h1><span>I'm a Abel Maminiaina,</span> frontend & backend developer based in French</h1>
        <p>I am a full-stack developer from Paris, French with 10 years of experience in multiple companies like Dekra, Ubitek, Wylog, Sneda</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">             
                <a href={resume} download="resume">My resume</a>              
            </div>
        </div>
    </div>
  )
}

export default Hero
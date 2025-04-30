import React from 'react'
import './About.css';

import profile_img from '../../assets/Profile2.jpg';


const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced FrontEnd & BackEnd Developper with over a decade of professional expertise in the field. Throughout my career. I have had the privilige of collaborating with presigious organizations, contrubiting to their success and growth.</p>
                    <p>My passion for developpement is not only reflected in my extensive experience but also int the enthusiasm and dedication I bring ro each project?</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"75%"}}/></div>
                    <div className="about-skill"><p>Tailwind</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>.Net</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>CI/CD</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr></hr>
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr></hr>
            <div className="about-achievement">
                <h1>30+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import './Services.css'
import services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="service-title">
            <h1>My Services</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="services-container">
            {services_data.map((service,index)=>{
                return <div key={index} className='services-format'>
                    <h3>{service.no}</h3>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <div className="service-readmore">
                        <p>Read more</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services
import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id="work" className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="mywork-container">
            {mywork_data.map((Worker,index)=>{
                return <img key={index} src={Worker.image} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork
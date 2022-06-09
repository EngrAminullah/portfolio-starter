import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className='services'>
        {/* ----------------Left Side------------------ */}
        <div className='awesome'>
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quisquam a asperiores eaque recusandae adipisci 
            <br/>
            praesentium ratione unde explicabo iure.</span>
            <a href={Resume} download>
              <button className='button s-button'>Download cv</button>
            </a>
            
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* ------------------Right Side---------------- */}

        <div className='cards'>
          <div style={{left:"14rem"}}>
            <Card 
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, sketch, photoshop, adobe, adobe xd"}
            />
          </div>
          {/* -------------Second Card------------------- */}
          <div style={{top:"12rem",left:"-4rem"}}>
            <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"Javascript,React js,React Native,Redux,typescript"}
            />
          </div>
           {/* -------------third Card------------------- */}
           <div style={{top:"19rem",left:"12rem"}}>
            <Card 
            emoji={Humble}
            heading={"UI/UX"}
            detail= {"Lorem dummy text are usually used in dummy texts where the sections are prety good."}
            />
          </div>
          <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
        </div>

    </div>
  )
}

export default Services
import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I'm</span>
                <span>Aminula</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut velit excepturi libero consequatur dignissimos natus ipsa saepe culpa aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ea!</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={Github} alt=''/>
                <img src={LinkedIn} alt=''/>
                <img src={Instagram} alt=''/>
            </div>
        </div>
        <div className="i-right">
            This is right side
        </div>
    </div>
  )
}

export default Intro
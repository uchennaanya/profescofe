import React from 'react'
import hero_img from './hero_img.png'
import Rectangle4 from './Rectangle4.png'
import Group19 from './Group19.png'

const Hero = () => {
    return (

        <div style={{display: 'flex'}}>
            <div style={{zIndex: 1}}>
            <h1 className="hero-title">
                Professional <br /> learning <br />
                made easy
            </h1>
            <p className="hero-text">
                We’ve got the solution to upgrade your
                skills and qualifications
            </p>
            <a href="#" className="btn-hero">Get Started</a>
            </div>
            <img src={hero_img} alt="profesco" className="hero-img" />
            <img src={Group19} alt="profesco" className="group19" />
            <img src={Rectangle4} alt="profesco" className="rectangle4" />
        </div>
    )
}

export default Hero

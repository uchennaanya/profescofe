import React from 'react'
import hero_img from '../components/img/hero_img.png'
import hero_bg from '../components/img/Rectangle4.png'
import dots from '../components/img/Group19.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1 className="hero-title">
                    Professional <br /> learning <br />
                    made easy
                </h1>
                <p className="hero-text">
                    We’ve got the solution to upgrade <br />
                    your skills and qualifications
                </p>
                <a href="#" className="btn-hero">Get Started</a>
            </div>

            <div className="hero-right">
                <img src={hero_img} alt="profesco" className="hero-img" />
                <img src={dots} alt="profesco" className="dots" />
                <img src={hero_bg} alt="profesco" className="bg" />
            </div>
        </div>
    )
}

export default Hero

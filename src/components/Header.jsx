import React from 'react'
import logo from './logo2.png'

const Header = () => {
    return (
        <>
            <header>
                <img src={logo} alt="profesco" width="100px" height="50px" />
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#" className="btn  ">Get Started</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}


export default Header

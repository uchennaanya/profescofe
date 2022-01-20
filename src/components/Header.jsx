import React from 'react'
import logo from '../components/img/logo2.png'
import menu from '../components/img/menu.png'

const Header = () => {
    return (
        <div className="header">
            <img src={menu} alt="burger" className="menu" />
            <header>
                <img src={logo} className="logo" />
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#" className="btn">Get Started</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}


export default Header

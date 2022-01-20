import React from 'react'
import logo2 from '../components/img//logo2.png'

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo2} alt="profesco logo" />
                <p>
                    &copy; 2022 profesco
                </p>
            </div>
            <div className="course-products">
                <p>ACCA Courses</p>
                <p>CIMA Courses</p>
                <p>ICAN Courses</p>
                <p>ACCA Products</p>
                <p>ICAN Products</p>
                <p>CIMA Products</p>
            </div>
            <div>
                <p>Blog</p>
                <p>FAQ</p>
                <p>Tutors</p>
                <p>Careers</p>
                <p>Testimonials</p>
            </div>
            <div>
                <p>Help</p>
                <p>About</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
            <div>
                <ul>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer

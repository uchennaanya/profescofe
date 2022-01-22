import React from 'react'
import testimonial1 from '../components/img/testimonial1.png'
import testimonial_bg from '../components/img/testimonial-bg.png'

const Testimonials = () => {
    return (
        <>
            <div className="testimonials">
                <div style={{paddingLeft: '10rem', zIndex: '1'}}>
                    <h2>
                        Students Reviews <br />
                        are essential
                        </h2>
                    <p className="caption">
                        See what our students are saying
                    </p>
                </div>

                <div className="text-wrap">
                    <p>
                        Boost your career with full access to our learning programme.
                        Catch up with the syllabus all in one place
                    </p>
                    <h3>Stella Mary</h3>
                    <p>
                        Accounting Student, Bricks University
                    </p>
                </div>
                <div>
                    <img src={testimonial_bg} alt="profesco" className="bg" />
                    <img src={testimonial1} alt="profesco" className="img" />
                </div>
            </div>
        </>
    )
}

export default Testimonials

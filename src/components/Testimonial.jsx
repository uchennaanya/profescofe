import React from 'react'
import testimonial1 from '../components/img/testimonial1.png'
import testimonial_bg from '../components/img/testimonial-bg.png'
import quot from '../components/img/quot.png'

const Testimonials = () => {
    return (
        <>
            <div className="testimonials">
                <div className="testimonial-left">
                <div className="review">
                    <h2>
                        Students Reviews <br />
                        are essential
                    </h2>
                    <p className="caption">
                        See what our students are saying
                    </p>
                </div>

                <div className="text-wrap">
                    <cite className="quot">
                        Boost your career with full access to our learning programme.
                        Catch up with the syllabus all in one place
                        <img src={quot} alt="Professco" className="quot-img" />
                    </cite>
                    <h3 className="quot-name">Stella Mary</h3>
                    <small className="quot">
                        Accounting Student, Bricks University
                    </small>
                </div>
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

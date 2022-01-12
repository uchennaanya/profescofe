import React from 'react'
import ican from './ican.png'
import acca from './acca.png'
import cima from './cima.png'

const Tutors = () => {
    return (
        <div className="tutor">
            <div style={{display:'flex', justifyContent: 'space-around', padding: '0 0 0 6rem'}}>
                <h2>Our tutors</h2>
                <div>
                    <h2>
                        100+ tutors around the country <br />
                        guiding you to the right path
                    </h2>
                    <p style={{textAlign: 'left'}}>
                        Boost your career with full access to our <br />
                        learning programme. Catch up with the <br />
                        syllabus all in one place
                    </p>
                </div>
            </div>
            <div className="tutor_img">
                <div><img src={ican} alt="ican" className="img_wrap" /></div>
                <div><img src={acca} alt="acca" className="img_wrap" /></div>
                <div><img src={cima} alt="cima" className="img_wrap" /></div>
            </div>
        </div>
    )
}

export default Tutors
import React from 'react'
import Rectangle4 from './Rectangle4.png'
import personal_tutor_img from './personal_tutor_img.png'
import Group19 from './Group19.png'
import bell_fill from './Bell_fill.png'


const Personal_Tutor = () => {
    return (
        <div className="personal_tutor">
            <div className="text">

                <div style={{
                    background: '#E08213',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5em'
                }}>
                    <img src={bell_fill} alt="profesco" style={{width: '15xp', height: '15px'}} />
                </div>
                <span style={{fontFamily: 'Inter', fontStyle: 'normal', fontWeight: '500', fontSize: '10px', color: '#6E7992'}}>
                    PRIVATE
                </span>
                <h2 className="title    ">
                    1 on 1 with tutors
                </h2>
                <p style={{width: '363px', color: '#6E7992', height: '84px'}}>
                    Boost your career with full access to our learning programme.
                    Catch up with the syllabus all in one place
                </p>
                <span style={{color: '#E08213', fontSize: '14px'}}>
                    Browse Tutor
                </span>

            </div>
            <img src={Rectangle4} alt="Profesco image" className="rectangle" />
            <img src={personal_tutor_img} alt="Profesco" className="all-access-img" />
            <img src={Group19} alt="profesco" className="group19" />

        </div>
    )
}

export default Personal_Tutor

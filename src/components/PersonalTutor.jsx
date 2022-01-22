import React from 'react'
import bg from '../components/img/Rectangle4.png'
import personal_tutor_img from '../components/img/personal_tutor_img.png'
import dots from '../components/img/Group19.png'
import bell_fill from '../components/img/Bell_fill.png'

const Personal_Tutor = () => {
    return (
        <div className="personal_tutor">
            <div className="text">
                <div className="bell">
                    <img src={bell_fill} alt="profesco" />
                </div>

                <span className="sub">
                    PRIVATE
                </span>

                <h2 className="title">
                    1 on 1 with tutors
                </h2>
                <p>
                    Boost your career with full access to our learning programme.
                    Catch up with the syllabus all in one place
                </p>
                <span className="more">
                    Browse Tutor
                </span>
            </div>
            <img src={bg} alt="Profesco image" className="bg" />
            <img src={personal_tutor_img} alt="Profesco" className="personal-tutor-img" />
            <img src={dots} alt="profesco" className="dots" />
        </div>
    )
}

export default Personal_Tutor

import React from 'react'
import bg from '../components/img/Rectangle4.png'
import learn_pace from '../components/img/learn_pace.png'
import dots from '../components/img/Group19.png'
import bell_fill from '../components/img/Bell_fill.png'


const LearnPace = () => {
    return (
        <div className="learn-pace">


            <div className="text">

                <div className="bell">
                    <img src={bell_fill} alt="profesco" />
                </div>

                <span className="sub">
                    CONVINIENT
                </span>
                <h2 className="title">
                    Learn at your pace
                </h2>
                <p>
                    Boost your career with full access to our learning programme.
                    Catch up with the syllabus all in one place
                </p>
                <span className="more">
                    Learn more
                </span>
            </div>

            <img src={bg} alt="Profesco image" className="bg" />
            <img src={learn_pace} alt="Profesco" className="all-access-img" />
            <img src={dots} alt="profesco" className="dots" />
        </div>
    )
}

export default LearnPace

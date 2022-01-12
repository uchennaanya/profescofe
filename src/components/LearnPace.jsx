import React from 'react'
import Rectangle4 from './Rectangle4.png'
import learn_pace from './learn_pace.png'
import Group19 from './Group19.png'
import bell_fill from './Bell_fill.png'


const LearnPace = () => {
    return (
        <div className="learn-pace">
            <img src={Rectangle4} alt="Profesco image" className="rectangle" />
            <img src={learn_pace} alt="Profesco" className="all-access-img" />
            <img src={Group19} alt="profesco" className="group19" />
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
                    CONVINIENT
                </span>
                <h2 className="title    ">
                    Get full Access
                </h2>
                <p>
                    Boost your career with full access to our learning programme.
                    Catch up with the syllabus all in one place
                </p>
                <span style={{color: '#E08213', fontSize: '14px'}}>
                    Learn more
                </span>
            </div>
        </div>
    )
}

export default LearnPace

import React from 'react'
import Rectangle4 from '../components/img/Rectangle4.png'
import all_access from '../components/img/all_access.png'
import Group19 from '../components/img/Group19.png'
import bell_fill from '../components/img/Bell_fill.png'


const All_Access = () => {
    return (
        <div className="all-access">
            <img src={Rectangle4} alt="Profesco image" className="bg" />
            <img src={all_access} alt="Profesco" className="all-access-img" />
            <img src={Group19} alt="profesco" className="dots" />
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
                    <img src={bell_fill} alt="profesco" style={{
                        width: '15xp',
                        height: '15px'
                    }} />
                </div>
                <span style={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '10px',
                    color: '#6E7992'
                }}>
                    FAST LEARNING
                </span>
                <h2 className="title">
                    Get full Access
                </h2>
                <p>
                    Boost your career with full access to our learning programme.
                    Catch up with the syllabus all in one place
                </p>
                <ul>
                    <li>Get full Access</li>
                    <li>24/7 Access</li>
                </ul>
            </div>
        </div>
    )
}

export default All_Access

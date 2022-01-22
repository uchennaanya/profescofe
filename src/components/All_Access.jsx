import React from 'react'
import bg from '../components/img/Rectangle4.png'
import all_access from '../components/img/all_access.png'
import dots from '../components/img/Group19.png'
import bell_fill from '../components/img/Bell_fill.png'


const All_Access = () => {
    return (
        <div className="all-access">

            <img src={all_access} alt="Profesco" className="all-access-img" />

            <img src={bg} alt="Profesco image" className="bg" />

            <img src={dots} alt="profesco" className="dots" />

            <div className="text">
                <div className="bell">
                    <img src={bell_fill} alt="profesco" />
                </div>
                <span className="sub">
                    FAST LEARNING
                </span>
                <h2 className="title">
                    Get full Access
                </h2>
                <p>
                    Boost your career with full access to our learning programme.
                    Catch up with the syllabus all in one place
                </p>
                <span className="check-wrap">
                    <i className='fas fa-check-circle check' ></i> <p>Get full Access</p>
                </span>

                <span className="check-wrap">
                    <i className='fas fa-check-circle check' ></i> <p> 24/7 Access </p>
                </span>
            </div>
        </div>
    )
}

export default All_Access

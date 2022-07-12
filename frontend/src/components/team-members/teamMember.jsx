import React from "react";
import './teamMember.css'

const TeamMember = (props) => {

    return (
        <div className="p-2 team-member">
            <img 
            src={props.picture} 
            alt='employee headshot'
            className="headshot"
            />
            <div className="member-details">
                <div className="fw-bolder">
                    <div className="d-inline-flex pt-1">
                    {props.name}
                    </div>
                </div>
                <div className="fw-normal job-title">{props.title}</div>
            </div> 
        </div>
    )
}

export default TeamMember;
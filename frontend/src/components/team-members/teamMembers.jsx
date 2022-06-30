import React, {useEffect, useState} from "react";
import TeamMember from "./teamMember";

const TeamMembers = () => {

    const [teamMembers, setTeamMembers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/team_members.json', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(data => setTeamMembers(data));
    }, []);

    let teamMemberDivs = (
        <div className="d-flex flex-wrap justify-content-evenly" style={{ "minWidth": "280px", "maxWidth": "800px"}}>
            {teamMembers && teamMembers.length > 0 && teamMembers.map((member) => {
                return(
                <div key={member.id}>
                    <TeamMember
                        name={member.name}
                        title={member.title}
                        picture={member.picture}
                    />
                </div>
                )
                
            })}
        </div>
    )

    // handle backend api not responding
    const checkForTeamDivs = (teamMembers) => {
        if (teamMembers){
            return teamMemberDivs 
        } else {
            return <p>Sorry, we aren't finding team members at this time.</p>
        }
    }

    return (
        <div className="d-inline-flex p-2 justify-content-center align-items-center">
            {checkForTeamDivs(teamMembers)}
        </div>
    )
}

export default TeamMembers;
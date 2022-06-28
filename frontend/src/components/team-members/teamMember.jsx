import React from "react";

const TeamMember = (props) => {

    return (
        <div className="p-2" style={{"marginLeft": "10px", "marginRight": "10px", "marginBottom": "5px", "borderRadius": "5px", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)", "width": "160px", "height": "160px"}}>
            <img 
            src={props.picture} 
            alt='employee headshot'
            style={{"height": "4em", "borderRadius": "5px"}}
            />
            <div style={{"height": "40%", "width": "100%", "display": "flex", "flexDirection": "column", "justifyContent": "space-between"}}>
                <div className="fw-bolder">
                    <div className="d-inline-flex pt-1">
                    {props.name}
                    </div>
                </div>
                <div className="fw-normal">{props.title}</div>
            </div> 
        </div>
    )
}

export default TeamMember;

// style={"borderRadius": "5px", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)"}}
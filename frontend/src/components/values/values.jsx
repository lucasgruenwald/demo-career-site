import React from "react";

const Values = () => {

    return (
        <div className="container" style={{"marginBottom": "2em"}}>
            <div className="row align-items-start d-flex flex-wrap">
                <div className="col" style={{"minWidth": "200px", "marginTop": "2em", "marginLeft": "1em", "marginRight": "1em"}}>
                    <h4>First Value</h4>
                    <p>Example text example text example text. Example text example text example text for example purposes. Example text example text example text. Example text example text example text for example purposes. </p>
                </div>
                <div className="col" style={{"minWidth": "200px", "marginTop": "2em", "marginLeft": "1em", "marginRight": "1em"}}>
                <h4>Second Value</h4>
                    <p>Example text example text example text. Example text example text example text for example purposes. Example text example text example text. Example text example text example text for example purposes. </p>
                </div>
                <div className="col" style={{"minWidth": "200px", "marginTop": "2em", "marginLeft": "1em", "marginRight": "1em"}}>
                <h4>Third Value</h4>
                    <p>Example text example text example text. Example text example text example text for example purposes. Example text example text example text. Example text example text example text for example purposes. </p>
                </div>
            </div>
        </div>
    )
}

export default Values;
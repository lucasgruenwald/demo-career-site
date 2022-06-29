import React, { useEffect, useState } from "react";
import JobForm from "./jobForm";
var numberToWords = require('number-to-words');

const Jobs = () => {

    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/jobs.json', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);

    const toWords = (num) => {
        num += 1
        let word = numberToWords.toWords(num);
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalized;
    }

    const jobFormContainer = (jobID, dataTarget) => {
        return( 
            <div className="">
                <p className="d-flex justify-content-center">
                <a className="btn" style={{"backgroundColor": "#BDD8FF"}} data-bs-target={`#${dataTarget + jobID}`} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    View Application Form
                </a>
                </p>

                <div id={`${dataTarget + jobID}`} className="collapse" >
                <div className="card card-body">
                    <JobForm jobID={jobID}/>
                </div>
                </div>
            </div>  
        )
    }

     let jobDivs = (
        <div className="accordion" id="accordionExample" style={{"width": "80vw", "maxWidth": "900px", "margin": "auto"}}>
            {jobs && jobs.length > 0 && jobs.map((job, idx) => {

                let dataTarget = "collapse" + toWords(idx)
                let heading = "heading" + toWords(idx)
                // console.log(job.id)

                return(
                    <div key={idx}  className="accordion-item">
                        <h2 className="accordion-header" id={`${heading}`}>
                        <button className="accordion-button d-flex flex-wrap collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${dataTarget}`} aria-expanded="false" aria-controls={`${dataTarget}`}>
                            {job.title}
                        </button>
                        </h2>
                        <div id={`${dataTarget}`} className="accordion-collapse collapse" aria-labelledby={`${heading}`} data-bs-parent="#accordionExample">
                            <div className="justify-content-between accordion-body">
                                <a href={job.post} target="_blank">
                                    <p className="d-inline-flex flex-wrap" style={{"wordBreak": "break-all"}}>
                                        link to job description
                                    </p>
                                </a>
                                {jobFormContainer(job.id, dataTarget)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )   


    return (
        <div style={{"paddingBottom": "20px"}} >
            {jobDivs}
        </div>
    )
}

export default Jobs;
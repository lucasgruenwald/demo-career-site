import React, { useEffect, useState } from "react";
import JobForm from "./jobForm";

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

    const jobFormContainer = (jobID, dataTarget) => {
        return( 
            <div style={{"marginTop": "5px"}}>
                <h6>Think you could be a good fit? Please apply!</h6>
                <div className="card card-body">
                    <JobForm jobID={jobID}/>
                </div>
                {/* </div> */}
            </div>  
        )
    }

     const jobDivs = (
        <div className="accordion" id="accordionExample" style={{"width": "80vw", "maxWidth": "900px", "margin": "auto"}}>
            {jobs && jobs.length > 0 && jobs.map((job, idx) => {

                return(
                    <div key={idx}  className="accordion-item">
                        <h2 className="accordion-header" id={`heading${idx}`}>
                        <button className="accordion-button d-flex flex-wrap collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded="false" aria-controls={`collapse${idx}`}>
                            {job.title}
                        </button>
                        </h2>
                        <div id={`collapse${idx}`} className="accordion-collapse collapse" aria-labelledby={`heading${idx}`} data-bs-parent="#accordionExample">
                            <div className="justify-content-between accordion-body">
                                <p style={{"maxWidth": "70vw", "margin": "auto", "paddingBottom": "3px"}}>This is some example placeholder text if you wanted to store a brief job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="" style={{"wordBreak": "break-word", "margin": "auto"}}>
                                        To learn more about this position, please read our&nbsp;
                                        <a href={job.post} target="_blank" rel="noreferrer" style={{ "margin": "auto" }}>
                                                detailed job listing.
                                        </a>
                                    </p>
                                {jobFormContainer(job.id, `collapse${idx}`)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )   

    // handle backend api not responding
    const checkForJobDivs = (jobs) => {
        if (jobs){
            return jobDivs 
        } else {
            return <p>Sorry, we aren't finding any openings at this time.</p>
        }
    }

    return (
        <div style={{"paddingBottom": "20px"}} >
            {checkForJobDivs(jobs)}
        </div>
    )
}

export default Jobs;
import React, { useEffect, useState } from "react";
import JobForm from "./jobForm";
import './jobs.css'

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

    const jobFormContainer = (jobID, jobTitle) => {
        return( 
            <div className="job-form-container">
                <h4 className="application-h4 d-inline-flex flex-wrap">{jobTitle}&nbsp;Application</h4>
                <p>All fields are required.</p>
                <div className="card card-body">
                    <JobForm jobID={jobID}/>
                </div>
            </div>  
        )
    }

     const jobDivs = (
        <div className="accordion" id="accordionExample">
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
                                <p className="placeholder-text">This is some example placeholder text if you wanted to store a brief job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <p className="learn-more">
                                        To learn more about this position, please read our&nbsp;
                                        <a href={job.post} target="_blank" rel="noreferrer" className="detail-link">
                                                detailed job listing
                                        </a>
                                        .
                                    </p>
                                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasRight${idx}`} aria-controls="offcanvasRight">Apply Now</button>

                                <div className="offcanvas offcanvas-end" tabIndex="-1" id={`offcanvasRight${idx}`} aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Join Us!</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        {jobFormContainer(job.id, job.title)}
                                    </div>
                                </div>
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
        <div className="job-container" >
            {checkForJobDivs(jobs)}
        </div>
    )
}

export default Jobs;
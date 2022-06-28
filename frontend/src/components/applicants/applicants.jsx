import React, {useEffect, useState} from "react";

const Applicants = () => {

    const [applicants, setApplicants] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/applicants.json', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(response => response.json())
        .then(data => setApplicants(data));
    }, []);

    let applicantDivs = (
        <tbody>
            {applicants && applicants.length > 0 && applicants.map((applicant, idx) => {
                return(
                  <tr key={idx} style={{"borderLeft": "1px solid lightgrey", "borderRight": "1px solid lightgrey"}}>
                    <td>{applicant.name}</td>
                    <td>{applicant.email}</td>
                    <td>{applicant.linkedin}</td>
                    <td>{applicant.jobid}</td>
                  </tr>
                )
                
            })}
        </tbody>
    )

    return (
      <div className="table-responsive">
        <table className="table table-striped" style={{"width": "90vw", "margin": "auto"}}>
        <thead>
          <tr>
            <th scope="col" style={{"width": "200px"}}>Full Name</th>
            <th scope="col" style={{"width": "200px"}}>Email</th>
            <th scope="col" style={{"width": "200px"}}>Linkedin</th>
            <th scope="col" style={{"width": "200px"}}>Job #</th>
          </tr>
        </thead>
          {applicantDivs}
        </table>
      </div>
    )
}

export default Applicants;

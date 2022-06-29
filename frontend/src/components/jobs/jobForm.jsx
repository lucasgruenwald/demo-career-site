import React, {useState} from "react";

const JobForm = (jobID) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");
    let id = jobID.jobID;

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/job/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    linkedin: linkedin,
                    jobid: id
                })
            })
            // provide success message instead of just refreshing
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <form onSubmit={onSubmitForm} >
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="fullname"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="linkedin" className="form-label">LinkedIn Profile</label>
                <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} type="text" className="form-control" id="linkedin"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default JobForm;
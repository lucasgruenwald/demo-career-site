import React, {useState} from "react";
import './jobForm.css'

const JobForm = ({jobID}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/job/${jobID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    linkedin: linkedin,
                    jobid: jobID
                })
            })
            .then((response) => {
                if (response.statusText === "OK"){
                    window.location = "/confirmation";
                } else {
                    alert("Please Enter the Required Information.");
                }
            })
        } catch (error) {
            console.error(error.message);
        }
    }

    function onInvalid(e) { e.target.classList.add('invalid'); }
    function onValid(e) { e.target.classList.remove('invalid'); }
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('invalid', onInvalid);
    });

    return (
        <form onSubmit={onSubmitForm} >
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} onInput={(e) => onValid(e)} required minLength="5" type="text" className="form-control" id="fullname"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} onInput={(e) => onValid(e)} required type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="linkedin" className="form-label">LinkedIn Profile URL</label>
                <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} onInput={(e) => onValid(e)} required minLength="15" type="text" className="form-control" id="linkedin"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit Application</button>
        </form>
    )
}

export default JobForm;
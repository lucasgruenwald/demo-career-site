import React from "react"

const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-sm navbar-light" style={{ "zIndex": "100", "background": "linear-gradient(to right, #e3f2fd, #f5f7f8)", "position": "fixed", "width": "100%", "top": "0", "left": "0", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{ "color": "#020357" }}>DemoCompany</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#values">Our Values</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#team">Meet the Team</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#jobs">Current Openings</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#mission" tabIndex="-1" aria-disabled="true">Our Mission</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
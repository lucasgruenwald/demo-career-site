import './App.css';
import TeamMembers from './components/team-members/teamMembers.jsx';
import Mission from './components/mission/mission.jsx';
import Jobs from './components/jobs/jobs';
import Values from './components/values/values';
import Applicants from './components/applicants/applicants';

function App() {
  return (
    <div className="App">
      <div className='header'>

        <nav className="navbar navbar-expand-sm navbar-light" style={{ "background": "linear-gradient(to right, #e3f2fd, #f5f7f8)"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">JobSite</a>
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


      </div>

      <div className='body-container'>
        <div className='about-section' id="about" style={{ "minHeight": "30vh", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)", "paddingTop": "5vh", "paddingBottom": "5vh"}}>
          <h3>About Us</h3>
          <p style={{"padding": "10vw"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
        <div className='values-section' id="values" style={{ "minHeight": "10vh", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)", "paddingTop": "20px", "paddingBottom": "20px", "background": "linear-gradient(to left, #fff, #f5f7f8) no-repeat, #0073b9"}}>
          <h3 style={{"paddingTop": "20px", "paddingBottom": "20px" }}>Company Values</h3>
          <Values/>
        </div>
        <div className='team-members-section' id="team" style={{ "minHeight": "10vh", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)", "paddingTop": "20px", "paddingBottom": "20px"}}>
          <h3 style={{"paddingTop": "20px", "paddingBottom": "20px"}}>Current Team Members</h3>
          <TeamMembers/>
        </div>
        <div className='jobs-section' id="jobs" style={{ "minHeight": "10vh", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)", "paddingTop": "20px", "paddingBottom": "20px", "background": "linear-gradient(to left, #fff, #f5f7f8) no-repeat, #0073b9"}}>
          <h3 style={{"paddingTop": "20px", "paddingBottom": "20px" }}>Current Openings</h3>
          <Jobs/>
        </div>
        <div className='mission-section' id="mission" style={{ "minHeight": "10vh", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)", "paddingTop": "20px", "paddingBottom": "20px"}}>
          <h3 style={{"paddingTop": "20px", "paddingBottom": "20px"}}>Mission Statement</h3>
          <Mission/>
        </div>
        <div className='applicants-section' id="mission" style={{ "minHeight": "10vh", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)", "paddingTop": "20px", "paddingBottom": "20px"}}>
          <h3 style={{"paddingTop": "20px", "paddingBottom": "20px"}}>Applications Received</h3>
          <p>(For Demo Purposes)</p>
          <Applicants/>
        </div>
        <div className='api-section' id="mission" style={{ "minHeight": "10vh", "boxShadow": "0 6px 16px 0 rgb(31 36 38 / 15%)", "paddingTop": "20px", "paddingBottom": "20px"}}>
          <h3 style={{"paddingTop": "20px", "paddingBottom": "20px"}}>API Info</h3>
          <p>(For Demo Purposes)</p>
          <p>List your routes</p>
        </div>
      </div>

      <div className='footer' style={{ "marginTop": "200px" }}>This is your footer div</div>
    </div>
  );
}

export default App;

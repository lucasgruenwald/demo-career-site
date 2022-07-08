import './landingPage.css';
import TeamMembers from '../components/team-members/teamMembers';
import Mission from '../components/mission/mission';
import Jobs from '../components/jobs/jobs';
import Values from '../components/values/values';
import Applicants from '../components/applicants/applicants';
import NavBar from '../components/navbar/navbar';

export const LandingPage = () => {

  return(
    <div className="App">

      <div className='header'>
        <NavBar/>
      </div>

      <div className='body-container'>
        <div className='about-section' id="about">
          <h1 className="about-us-h1">We Get Excited to Work</h1>
          <p className="about-us-p">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. <br/><br/> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
        <div className='values-section body-slice-primary' id="values">
          <h3 className="body-h3">Company Values</h3>
          <Values/>
        </div>
        <div className='team-members-section body-slice-secondary' id="team">
          <h3 className="body-h3">Current Team Members</h3>
          <TeamMembers/>
        </div>
        <div className='jobs-section body-slice-primary' id="jobs">
          <h3 className="body-h3">Current Openings</h3>
          <Jobs/>
        </div>
        <div className='mission-section body-slice-secondary' id="mission">
          <h3 className="body-h3">Mission Statement</h3>
          <Mission/>
        </div>
        <div className='applicants-section body-slice-primary' id="mission">
          <h3 className="body-h3">Applications Received</h3>
          <p>(For Demo Purposes)</p>
          <Applicants/>
        </div>
      </div>

      <div className='footer'>Built by Luke Gruenwald</div>
      
    </div>
  )
}

export default LandingPage;
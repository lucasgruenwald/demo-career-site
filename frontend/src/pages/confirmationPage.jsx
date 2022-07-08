
import "./confirmationPage.css"

const ConfirmationPage = () => {

  return(
    <div className="App">
      <div className='conf-header'>
        <h5 className='conf-header-h5'>Demo Company</h5>
      </div>

      <div className='conf-body-container'>
        <h3>Application Submitted!</h3>
        <h6 className='conf-body-h6'>Thank you for your interest in joining our company! <br/> We will reach out soon if there is a potential fit.</h6>
        <a href="/">Return home</a>
      </div>

      <img className='conf-image' alt="thank you" src="https://i.giphy.com/media/KB8C86UMgLDThpt4WT/giphy.webp"/>

      <div className='conf-footer'>Built by Luke Gruenwald</div>
    </div>
  )
}

export default ConfirmationPage;
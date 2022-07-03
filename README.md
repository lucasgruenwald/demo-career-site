## Demo Company Careers Website

### Run Locally: 

  * Main folder: 
    * bundle install 
    * rails db:migrate 
    * rails db:seed 
    * rails s   (port 3000)

  * Frontend folder:
    * npm install 
    * npm start 

Rails 7.0.3 - Ruby 3.1.2


### Features

* Displays team members from the backend ( GET /team_members )
  * displays the employee name, title, id, and profile photo

* Displays job postings from the backend ( GET /jobs )
  * displays the job title, id, a link to the post
  * UI provides an application form under each posting

* Receives job applications from the UI ( POST /job/:id )
  * form posts to Applicants with the associated job id 
  * accepts params name, email, linkedin, & jobid 
  * enforces a few basic rails validations 

* For demo purposes, the site displays a list of your application submissions 

### Stack

* Frontend: JavaScript & React (Functional Components, Hooks)
* Backend: Ruby on Rails
* Bootstrap 5

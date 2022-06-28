json.extract! applicant, :id, :name, :email, :linkedin, :jobid, :created_at, :updated_at
json.url applicant_url(applicant, format: :json)

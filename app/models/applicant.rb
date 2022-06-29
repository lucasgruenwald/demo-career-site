# == Schema Information
#
# Table name: applicants
#
#  id         :integer          not null, primary key
#  name       :string
#  email      :string
#  linkedin   :text
#  jobid      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Applicant < ApplicationRecord

  validates :name, :email, :linkedin, presence: true 
  validate :email_check
  validate :linkedin_check

  private
  def email_check
    if email
      unless email.include?"@" and email.include?(".") and email.length > 5
        errors.add(:email, "must use correct format")
      end
    end
  end 

  def linkedin_check
    if linkedin
      unless linkedin.include?"linkedin.com/"
        errors.add(:linkedin, "must be a profile url")
      end
    end 
  end

end

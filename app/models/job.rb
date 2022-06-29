# == Schema Information
#
# Table name: jobs
#
#  id         :integer          not null, primary key
#  title      :string
#  post       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Job < ApplicationRecord

  validates :title, :post, presence: true
  validates :post, uniqueness: true
  
end

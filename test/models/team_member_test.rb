# == Schema Information
#
# Table name: team_members
#
#  id         :integer          not null, primary key
#  name       :string
#  title      :string
#  picture    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class TeamMemberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

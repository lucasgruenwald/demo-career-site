require "application_system_test_case"

class TeamMembersTest < ApplicationSystemTestCase
  setup do
    @team_member = team_members(:one)
  end

  test "visiting the index" do
    visit team_members_url
    assert_selector "h1", text: "Team members"
  end

  test "should create team member" do
    visit team_members_url
    click_on "New team member"

    fill_in "Name", with: @team_member.name
    fill_in "Picture", with: @team_member.picture
    fill_in "Title", with: @team_member.title
    click_on "Create Team member"

    assert_text "Team member was successfully created"
    click_on "Back"
  end

  test "should update Team member" do
    visit team_member_url(@team_member)
    click_on "Edit this team member", match: :first

    fill_in "Name", with: @team_member.name
    fill_in "Picture", with: @team_member.picture
    fill_in "Title", with: @team_member.title
    click_on "Update Team member"

    assert_text "Team member was successfully updated"
    click_on "Back"
  end

  test "should destroy Team member" do
    visit team_member_url(@team_member)
    click_on "Destroy this team member", match: :first

    assert_text "Team member was successfully destroyed"
  end
end

require 'rails_helper'

RSpec.feature "As user" do
  scenario "I can log in" do

  User.create(email: "sergey@gmail.com", password: "123", password_confirmation: "123")

  visit login_path
  fill_in "session[email]", with: "sergey@gmail.com"
  fill_in "session[password]", with: "123"

  click_on "Log In"

  expect(current_path).to eq(root_path)
  expect(page).to have_content("Logout")
  expect(page).to_not have_content("Login")
  end
end

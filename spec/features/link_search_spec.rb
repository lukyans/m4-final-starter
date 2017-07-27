require 'rails_helper'

RSpec.describe "Link search", :js => true do
  scenario "search for link" do
    user = User.create(email: "lukyans@gmail.com", password: "123")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
    visit root_path

    within '.form-2' do
      fill_in "Url", with: "https://www.google.com/"
      fill_in "Title", with: "google page"
      click_on "Submit"

      fill_in "Url", with: "https://www.twitter.com/"
      fill_in "Title", with: "Twitter"
      click_on "Submit"
    end

    within '.form-3' do
      fill_in "search", with: "wi"
    end

    expect(page).to have_content("https://www.twitter.com/")
  end
end

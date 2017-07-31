require "rails_helper"

RSpec.describe "it can filter", :js => :true do
  scenario "click on show read displays read links only" do
    user = User.create(email: "lukyans@gmail.com", password: "123")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit "/"
    fill_in "Url", with: "https://www.google.com/"
    fill_in "Title", with: "google page"

    click_on "Submit"

    link = Link.last

    within('.link .read-status') do
      expect(page).to have_text("false")
    end

    click_button "Mark as read"

    within('.link .read-status') do
      expect(page).to have_text("true")
    end


      click_button "Show read"
    

    within('.link .read-status') do
      expect(page).to have_text("true")
    end
  end
end

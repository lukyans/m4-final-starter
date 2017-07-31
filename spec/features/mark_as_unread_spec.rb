require "rails_helper"

RSpec.describe "can mark links as read", :js => :true do
  scenario "Mark a link as read" do
    user = User.create(email: "lukyans@gmail.com", password: "123")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit "/"
    fill_in "Url", with: "https://www.google.com/1"
    fill_in "Title", with: "google page"

    click_on "Submit"

    link = Link.last

    within('.link .read-status') do
      expect(page).to have_text("false")
    end

    click_on "Mark as read"

    within('.link .read-status') do
      expect(page).to have_text("true")
    end

    click_on "Mark as unread"

    within('.link .read-status') do
    expect(page).to have_text("false")
    end
  end
end

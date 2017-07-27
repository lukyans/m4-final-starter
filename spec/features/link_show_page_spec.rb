require 'rails_helper'

RSpec.describe "as a user on the site"  do
  scenario "I can edit link" do
    user = User.create(email: "lukyans@gmail.com", password: "123")
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit root_path

    fill_in "Url", with: "https://www.google.com/1"
    fill_in "Title", with: "google page"
    click_on "Submit"

    expect(page).to have_content("Edit")

    link = Link.last
    click_on "Edit"
    expect(current_path).to eq(edit_link_path(link))

    fill_in "Url", with: "https://www.google.com/2"
    fill_in "Title", with: "google"

    click_on "Submit"

    expect(current_path).to eq(links_path)
    expect(page).to have_content("https://www.google.com/")
    expect(page).to have_content("google")
  end
end

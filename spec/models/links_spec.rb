require 'rails_helper'

RSpec.describe Link, type: :model do
  context "validations" do
    it { is_expected.to validate_presence_of(:url) }
  end
end

RSpec.describe Link, "associations", type: :model do
  it { should belong_to(:user) }
end

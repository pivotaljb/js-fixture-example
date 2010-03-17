require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe UsersController do
  it "generates a fixture for the users index page" do
    get :index
    response.should be_success
    save_fixture(html_for('body'), 'users-index')
  end
end

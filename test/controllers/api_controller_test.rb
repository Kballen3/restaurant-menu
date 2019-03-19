require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get Menus" do
    get api_Menus_url
    assert_response :success
  end

end

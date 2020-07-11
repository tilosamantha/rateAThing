require 'test_helper'

class Api::ThingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_things_index_url
    assert_response :success
  end

  test "should get update" do
    get api_things_update_url
    assert_response :success
  end

end

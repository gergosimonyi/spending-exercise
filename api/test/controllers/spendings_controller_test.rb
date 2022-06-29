require "test_helper"

class SpendingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @spending = spendings(:one)
  end

  test "should get index" do
    get spendings_url, as: :json
    assert_response :success
  end

  test "should create spending" do
    assert_difference("Spending.count") do
      post spendings_url, params: { spending: { amount: @spending.amount, currency: @spending.currency, description: @spending.description, spent_at: @spending.spent_at } }, as: :json
    end

    assert_response :created
  end

  test "should show spending" do
    get spending_url(@spending), as: :json
    assert_response :success
  end
end

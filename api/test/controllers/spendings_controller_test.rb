require "test_helper"

class SpendingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @spending = spendings(:cookie)
  end

  test "should get index" do
    get spendings_url, as: :json
    assert_response :success
  end

  test "should get index with currency and order" do
    ['', 'USD', 'HUF'].each do |currency|
      ['', '-date', 'date', '-value', 'value'].each do |order|
        get "#{spendings_url}?currency=#{currency}&order=#{order}", as: :json
        assert_response :success

        data = JSON.parse(response.body).map(&:symbolize_keys)

        if currency.present?
          assert(data.all? { |spending| spending[:currency] == currency })
        end

        if order.present?
          order_by = order.gsub('-', '').to_sym
          order_by = :spent_at if order_by == :date
          descending = order[0] == '-'

          sorted = data.sort_by { |spending| spending[order_by] }
          sorted = sorted.reverse if descending

          assert(data == sorted)
        end
      end
    end
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

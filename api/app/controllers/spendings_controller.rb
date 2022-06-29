class SpendingsController < ApplicationController
  def index
    @spendings = Spending.all

    if params[:currency].present?
      @spendings = @spendings.where(currency: params[:currency])
    end

    if params[:order].present?
      order = case params[:order]
              when 'spent_at'
                { spent_at: :asc }
              when '-spent_at'
                { spent_at: :desc }
              when 'value'
                { value: :asc }
              when '-value'
                { value: :desc }
              else
                { }
              end

      @spendings = @spendings.order(order)
    end

    render json: @spendings
  end

  def show
    render json: @spending
  end

  def create
    @spending = Spending.new(spending_params)

    if @spending.save
      render json: @spending, status: :created, location: @spending
    else
      render json: @spending.errors, status: :unprocessable_entity
    end
  end

  private
    def spending_params
      params.require(:spending).permit(:description, :currency, :amount, :spent_at)
    end
end

class SpendingsController < ApplicationController
  def index
    @spendings = Spending.all

    if params[:filter].present?
      @spendings = @spendings.where(currency: params[:filter])
    end

    if params[:order].present?
      order = case params[:order]
              when 'dateAscending'
                { spent_at: :asc }
              when 'dateDescending'
                { spent_at: :desc }
              when 'amountAscending'
                { amount: :asc }
              when 'amountDescending'
                { amount: :desc }
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

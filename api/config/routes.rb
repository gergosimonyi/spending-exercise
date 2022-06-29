Rails.application.routes.draw do
  resources :spendings, only: [:index, :show, :create]
end

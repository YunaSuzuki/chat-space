Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root    'messages#index'
  get     'groups/new'      => 'groups#new'
  get     'users/edit'      => 'users#edit'
  get     'groups/edit'     => 'groups#edit'
  resources :users, only: [:edit, :update]
end

Bludkin::Application.routes.draw do


  
  devise_for :users
 

  # authenticated :user do 
  #   root to: "devise/sessions#new", :as => "authenticated_root"
  # end

  root to: 'home#index' 

  devise_scope :user do
    get 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session_fb
  end

end

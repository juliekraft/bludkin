class Cycle < ActiveRecord::Base
  belongs_to :user
  has_many :cycle_contents


end

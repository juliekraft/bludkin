class Cycle < ActiveRecord::Base
  belongs_to :user
  has_many :cycle_contents

  def as_json(options={})
   default = super options 
   default.merge({days: cycle_end_date ? cycle_end_date.mjd - start_date.mjd : nil})
  end 


end

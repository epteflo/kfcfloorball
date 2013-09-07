class Checkin < ActiveRecord::Base
  # To change this template use File | Settings | File Templates.
  belongs_to :user
  belongs_to :match
end
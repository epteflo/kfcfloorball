class Participation < ActiveRecord::Base
  # To change this template use File | Settings | File Templates.
  self.table_name="users_matches"
  belongs_to :user
  belongs_to :match
end
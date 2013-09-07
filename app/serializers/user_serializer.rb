class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :nickname, :role, :login
end

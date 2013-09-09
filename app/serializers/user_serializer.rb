class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :nickname, :role, :login,
             :authentication_token
end

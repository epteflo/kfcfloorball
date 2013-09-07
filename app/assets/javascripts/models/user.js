App.User = DS.Model.extend({
  email: DS.attr('string'),
  login: DS.attr('string'),
  name: DS.attr('string'),
  nickname: DS.attr('string'),
  password: DS.attr('string'),
  role: DS.attr('string')
});

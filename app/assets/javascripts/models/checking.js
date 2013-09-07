App.Checkin = DS.Model.extend({
  assist: DS.attr('number'),
  goal: DS.attr('number'),
  order_in_team: DS.attr('number'),
  state: DS.attr('string'),
  team: DS.attr('string'),
  user: DS.belongsTo('user')
});

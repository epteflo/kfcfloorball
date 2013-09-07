App.Match = DS.Model.extend({
  aScore: DS.attr('number'),
  bScore: DS.attr('number'),
  matchDate: DS.attr('date'),
  deadline: DS.attr('date'),
  limit: DS.attr('number'),
  state: DS.attr('string'),
  venue: DS.attr('string'),
  distributionMode: DS.attr('string'),
  checkins: DS.hasMany('checkin')
});

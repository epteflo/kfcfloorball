App.Statistic = DS.Model.extend({
  goals: DS.attr('number'),
  assists: DS.attr('number'),
  matches: DS.attr('number'),
  user: DS.belongsTo('user'),

  points: function() {
    return (this.get('goals') || 0) + (this.get('assists') || 0)
  }.property('goals', 'assists'),
  points_per_match: function() {
    return this.get('points') === 0 ? 0 : Math.round(this.get('points') * 100 / this.get('matches')) / 100;
  }.property('points','matches')
});

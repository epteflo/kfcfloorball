App.Router.map(function() {
  this.resource('matches', {path: "/"}, function(){
    this.route('new');
  });
  this.resource('match', {path: "/matches/:match_id"});
  this.resource('users', {path: "/users"}, function(){
    this.route('new');
  });
  this.resource('user', {path: "/users/:user_id"});
  this.resource('statistics', {path: "/statistics"});
});

App.MatchesRoute = Ember.Route.extend({
  model: function(){
    return this.get('store').find('match');
  }
});

App.MatchesIndexRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('matches')
  }
});

App.MatchesNewRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('match', {matchDate: moment().add('days', 1).hour(7).minute(30).second(0).toDate()});
  },

  deactivate: function() {
    var m = this.modelFor('matches.new');
    if (m.get('isDirty')) {
      m.deleteRecord();
    }
  }
});

App.MatchRoute = Ember.Route.extend({
  model: function(params){
    return this.get('store').find('match',params.match_id);
  }
});

App.UsersRoute = Ember.Route.extend({
  model: function(){
    return this.get('store').find('user');
  }
});

App.UsersIndexRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('users')
  }
});

App.UsersNewRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('user');
  },

  deactivate: function() {
    var m = this.modelFor('users.new');
    if (m.get('isDirty')) {
      m.deleteRecord();
    }
  }
});

App.UserRoute = Ember.Route.extend({
  model: function(params){
    return this.get('store').find('user',params.user_id);
  }
});

App.StatisticsRoute = Ember.Route.extend({
  model: function(){
    return this.get('store').find('statistic');
  }
});

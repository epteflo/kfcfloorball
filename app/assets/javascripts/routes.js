App.Router.map(function() {
  this.resource('matches', {path: "/"}, function(){
    this.route('new')
  });
  this.resource('match', {path: "/matches/:match_id"});
});

App.MatchesRoute = Ember.Route.extend({
  model: function(){
    return this.get('store').findAll('match');
  }
});

App.MatchesIndexRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('matches')
  }
});

App.MatchRoute = Ember.Route.extend({
  model: function(params){
    return this.get('store').find('match',params.match_id);
  }
});


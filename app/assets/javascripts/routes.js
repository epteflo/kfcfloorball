App.Router.map(function() {
  this.resource('matches', {path: "/"});
  this.resource('match', {path: "/matches/:match_id"});
});

App.MatchesRoute = Ember.Route.extend({
  model: function(){
    return this.get('store').findAll('match');
  }
});

App.MatchRoute = Ember.Route.extend({
  model: function(params){
    return this.get('store').find('match',params.match_id);
  }
});


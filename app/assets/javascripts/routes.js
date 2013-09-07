var MATCHES = [App.Match.create({id: 1, title:"Első meccs"}), App.Match.create({id: 2, title:"Második meccs"})];

App.Router.map(function() {
  this.resource('matches', {path: "/"});
  this.resource('match', {path: "/matches/:match_id"});
});

App.MatchesRoute = Ember.Route.extend({
  model: function(){
    return MATCHES;
  }
});

App.MatchRoute = Ember.Route.extend({
  model: function(params){
    return MATCHES[params.match_id-1];
  }
});


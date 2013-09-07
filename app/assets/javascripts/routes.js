App.Router.map(function() {
  this.resource('matches', {path: "/"}, function(){
    this.route('new')
  });
  this.resource('match', {path: "/matches/:match_id"});
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
    this.get('store').createRecord('match', {matchDate: moment().add('days', 1).hour(7).minute(30).second(0).toDate()});
  }

  /*deactivate: function() {
    var m = this.modelFor('matches.new');
    if (m.get('isDirty')) {
      this.get('store').deleteRecord(m);
    }
    this._super();
  }*/
});

App.MatchRoute = Ember.Route.extend({
  model: function(params){
    return this.get('store').find('match',params.match_id);
  }
});


App.MatchesController = Em.ArrayController.extend({
});

App.MatchesIndexController = Em.ArrayController.extend({
  sortProperties: ['matchDate'],
  sortAscending: false
});


App.MatchesNewController = Em.ObjectController.extend({
  actions: {
    save: function() {
      var me = this;
      var model = this.get('model');
      model.save().then(function(model) {
        console.log('saved', model);
        me.transitionToRoute('match', model);
      });
    }
  }
});

App.MatchController = Em.ObjectController.extend({
  teamA: function() {
    return this.get('checkins').filterProperty('team', 'A')
  }.property('checkins.@each'),

  teamB: Ember.computed.filterBy('checkins', 'team', 'B')
})

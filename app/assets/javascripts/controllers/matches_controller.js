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
  teamA: Ember.computed.filterBy('checkins', 'team', 'A'),
  teamB: Ember.computed.filterBy('checkins', 'team', 'B'),

  isDistributionOnField: Em.computed.equal('distributionMode', 'onfield'),
  isDistributionOnWeighted: Em.computed.equal('distributionMode', 'weighted'),

  isStateRSVP: Em.computed.equal('state', 'RSVP')
})

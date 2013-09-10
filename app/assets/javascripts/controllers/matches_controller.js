App.MatchesController = Em.ArrayController.extend({
});

App.MatchesIndexController = Em.ArrayController.extend({
  itemController: 'match',
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
  // okCheckins: Ember.computed.filterBy('model.checkins', 'state', 'ok'),
  // teamA: Ember.computed.filterBy('okCheckins', 'team', 'A'),
  // teamB: Ember.computed.filterBy('okCheckins', 'team', 'B'),

  okCheckins: function() {
    return this.get('checkins').filterBy('state', 'ok');
  }.property('checkins.@each.state'),

  nokCheckins: function() {
    return this.get('checkins').filterBy('state', 'nok');
  }.property('checkins.@each.state'),

  teamA: function() {
    return this.get('okCheckins').filterBy('team', 'A');
  }.property('okCheckins.@each.team'),

  teamB: function() {
    return this.get('okCheckins').filterBy('team', 'B');
  }.property('okCheckins.@each.team'),

  isDistributionOnField: Em.computed.equal('distributionMode', 'onfield'),
  isDistributionOnWeighted: Em.computed.equal('distributionMode', 'weighted'),
  isStateRSVP: Em.computed.equal('state', 'RSVP'),

  needs: ['application'],
  applicationController: Ember.computed.alias('controllers.application'),
  currentUser: Ember.computed.alias('applicationController.currentUser'),

  checkinOfCurrentUser: function() {
    var currentUserId = this.get('currentUser.id');
    return this.get('checkins').findBy('user.id', currentUserId);
  }.property('currentUser', 'checkins.@each'),

  isCurrentUserOk: Ember.computed.equal('checkinOfCurrentUser.state', 'ok'),
  isCurrentUserNok: Ember.computed.equal('checkinOfCurrentUser.state', 'nok'),
  isCurrentUserNotResponded: Ember.computed.none('checkinOfCurrentUser.state'),

  actions: {
    rsvp: function(state) {
      var user = this.get('currentUser');
      var checkin = this.get('checkinOfCurrentUser');
      checkin = checkin || this.get('model.checkins').createRecord({user: user});
      checkin.set('state', state);
      var me = this;
      checkin.save().then(function() {
        me.transitionToRoute('match', this.get('model'));
      });
    }
  }
})

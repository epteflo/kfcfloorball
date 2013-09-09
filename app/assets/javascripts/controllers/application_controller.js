App.ApplicationController = Ember.Controller.extend({
  // when a user enters the app unauthenticated, the transition
  // to where they are going is saved off so it can be retried
  // when they have logged in.
  savedTransition: null,

  login: function() {
    var userJson = JSON.parse(localStorage.user);
    var user = this.get('store').push('user', userJson);
    this.setProperties({ savedTransition: null, currentUser: user });
  },

  doLogout: function() {
    this.set('currentUser', null);
    delete localStorage.user;
  }
});

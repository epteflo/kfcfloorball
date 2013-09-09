App.Router.map(function() {
  this.resource('authenticated', {path: "/"}, function(){
    this.resource('matches', {path: "/"}, function(){
      this.route('new');
    });
    this.resource('match', {path: "/matches/:match_id"});
    this.resource('users', {path: "/users"});
    this.resource('user', {path: "/users/:user_id"});
    this.resource('statistics', {path: "/statistics"});
  });
  this.route('login');
  this.route('registration');
});

App.ApplicationRoute = Ember.Route.extend({
  actions: {
    error: function(error, transition) {
      if (error.status.toString() === "401") {
        this.controllerFor('login').set('errorMessage', "Jelentkezz be!!!");
        this.transitionTo('login');
      }
    },

    logout: function() {
      this.controllerFor('application').doLogout();
      delete localStorage.authToken;
      this.transitionTo('login');
    }
  }
});

App.AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    var applicationController = this.controllerFor('application');

    // or check a cookie, or other state
    if (!localStorage.authToken || !localStorage.user) {
      applicationController.set('savedTransition', transition);
      this.transitionTo('login');
    } else {
      this.controllerFor('application').login();
    }
  }
});

App.LoginRoute = Ember.Route.extend({
  actions: {
    login: function() {
      var loginController = this.controllerFor('login'),
          applicationController = this.controllerFor('application'),
          email = loginController.get('email'),
          password = loginController.get('password')
          me = this;

      $.post('/users/sign_in',
        {user: {email: email, password: password}}
      ).done(function(result) {
        localStorage.authToken = result.user.authentication_token;
        localStorage.user = JSON.stringify(result.user);

        var transition = applicationController.get('savedTransition');

        // set isLoggedIn so the UI shows the logout button
        applicationController.login();

        // if the user was going somewhere, send them along, otherwise
        // default to `/posts`
        if (transition) {
          transition.retry();
        } else {
          me.transitionTo('matches');
        }
      }).fail(function(result){
        loginController.set('errorMessage', 'Hibás jelszó vagy felhasználónév.')
      });
    }
  }
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
    var store = this.get('store')
    return store.find('match',params.match_id);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    // Ha a checkin-ek száma 0, akkor feltételezzük, hogy még nem tötltődött be
    // teljesen.
    if (model.get('checkins.length') === 0) {
      model.reload();
    }
    return;
  }
});

App.UsersRoute = Ember.Route.extend({
  model: function(){
    return this.get('store').find('user');
  }
});

App.RegistrationRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('user');
  },

  deactivate: function() {
    var m = this.modelFor('registration');
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

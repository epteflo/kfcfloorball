App.RegistrationController = Em.ObjectController.extend({
  needs: ['login'],
  loginController: Ember.computed.alias('controllers.login'),

  errorMessages: function() {
    var errors = this.get('errors') || {}
      , errorMessages = [];

    Ember.keys(errors).forEach(function(key) {
      errors[key].forEach(function(msg) {
        errorMessages.push(key + " " + msg);
      });
    });
    return errorMessages;
  }.property('errors'),

  actions: {
    save: function() {
      var me = this;
      var model = this.get('model');
      var data = { user: model.getProperties('name', 'email', 'password')};
      data.user.password_confirmation = model.get('passwordConfirmation');

      $.post('/users', data).done(function() {
        me.set('loginController.successMessage', 'Sikeres regisztráció.');
        me.transitionToRoute('login');
      }).fail(function(response) {
        me.set('errors', JSON.parse(response.responseText).errors);
      });
    }
  }
});


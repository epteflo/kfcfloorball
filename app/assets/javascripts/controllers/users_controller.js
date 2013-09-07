App.UsersIndexController = Em.ArrayController.extend({
  sortProperties: ['nickname'],
  sortAscending: true
});

App.UsersNewController = Em.ObjectController.extend({
  actions: {
    save: function() {
      var me = this;
      var model = this.get('model');
      model.save().then(function(model) {
        console.log('saved', model);
        me.transitionToRoute('user', model);
      });
    }
  }
});


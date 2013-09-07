App.MatchesController = Em.ArrayController.extend({
});

App.MatchesIndexController = Em.ArrayController.extend({
  sortProperties: ['matchDate'],
  sortAscending: false
});


App.MatchesNewController = Em.ObjectController.extend({
  startEditing: function() {
    this.transaction = this.store.transaction();
    this.set('content', this.transaction.createRecord('match', {matchDate: moment().add('days', 1).hour(7).minute(30).second(0).toDate()}));
  },
  stopEditing: function() {
    if (this.transaction) {
      this.transaction.rollback();
      this.transaction = null;
    }
  }
});

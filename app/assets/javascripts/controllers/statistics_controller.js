App.StatisticsController = Em.ArrayController.extend({
  sortProperties: ['pointsPerMatch'],
  sortAscending: false,
  actions: {
    toggleSort: function(sortBy) {
      var previousSortBy;
      previousSortBy = this.get('sortProperties.0');
      if (sortBy === previousSortBy) {
        return this.set('sortAscending', !this.get('sortAscending'));
      } else {
        this.set('sortAscending', true);
        return this.set('sortProperties', [sortBy]);
      }
    }
  }
});
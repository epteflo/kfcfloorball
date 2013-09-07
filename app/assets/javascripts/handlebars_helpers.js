Ember.Handlebars.registerBoundHelper('day', function(value){
  return moment(value).format('LL');
});

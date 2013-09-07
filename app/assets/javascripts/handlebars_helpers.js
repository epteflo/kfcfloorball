Ember.Handlebars.registerBoundHelper('day', function(value){
  return Em.isEmpty(value) ? '' : moment(value).format('LL');
});

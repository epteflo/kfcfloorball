Ember.Handlebars.registerBoundHelper('day', function(value){
  return Em.isEmpty(value) ? '' : moment(value).format('LL');
});

Ember.Handlebars.registerBoundHelper('repeat-icon', function(count, options) {
  var out = "";
  while (count--) {
    out += "<i class='glyphicon glyphicon-%@'></i>".fmt(options.hash.icon)
  }
  return Ember.String.htmlSafe(out);
});

Ember.Handlebars.registerBoundHelper('number-with-icon', function(number, options) {
  var out = "";
  if (number > 0) {
    out = "%@ <i class='glyphicon glyphicon-%@'></i>".fmt(number, options.hash.icon);
  }
  return Ember.String.htmlSafe(out);
});


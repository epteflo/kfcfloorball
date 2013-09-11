Ember.Handlebars.registerBoundHelper('day', function(value){
  return Em.isEmpty(value) ? '' : moment(value).format('ll');
});

Ember.Handlebars.registerBoundHelper('daytime', function(value){
  return Em.isEmpty(value) ? '' : moment(value).format('YYYY. MMM. D. h:m');
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

Ember.Handlebars.registerHelper('icon', function(name) {
  var out = "<i class='glyphicon glyphicon-%@'></i> ".fmt(name);
  return Ember.String.htmlSafe(out);
});

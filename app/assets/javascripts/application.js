// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require vendor
//= require_self
//= require store
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./controllers
//= require routes
//= require handlebars_helpers

$.ajaxPrefilter( function( options, originalOptions, xhr ) {
  if (localStorage.authToken) {
    xhr.setRequestHeader('X-Auth-Token', localStorage.authToken)
  }
});

App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// https://github.com/emberjs/data/blob/master/TRANSITION.md#adapters
App.ApplicationSerializer = DS.RESTSerializer.extend({
  normalize: function(type, hash, property) {
    var normalized = {}, normalizedProp;

    for (var prop in hash) {
      if (prop.substr(-3) === '_id') {
        // belongsTo relationships
        normalizedProp = prop.slice(0, -3);
      } else if (prop.substr(-4) === '_ids') {
        // hasMany relationship
        normalizedProp = Ember.String.pluralize(prop.slice(0, -4));
      } else {
        // regualarAttribute
        normalizedProp = prop;
      }

      normalizedProp = Ember.String.camelize(normalizedProp);
      normalized[normalizedProp] = hash[prop];
    }

    return this._super(type, normalized, property);
  },

  serializeAttribute: function(record, json, key, attribute) {
    var get = Ember.get;
    var attrs = get(this, 'attrs');
    var value = get(record, key), type = attribute.type;

    if (type) {
      var transform = this.transformFor(type);
      value = transform.serialize(value);
    }

    // if provided, use the mapping provided by `attrs` in
    // the serializer

    key = attrs && attrs[key] || Ember.String.decamelize(key);

    json[key] = value;
  }
});
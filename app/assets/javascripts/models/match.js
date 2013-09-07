App.Match = DS.Model.extend({
  title: DS.attr('string')
});

App.Match.FIXTURES = [
  {id: 1, title:"Első meccs"},
  {id: 2, title:"Második meccs"}
]
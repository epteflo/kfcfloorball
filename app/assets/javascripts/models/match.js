App.Match = DS.Model.extend({
  teamAScore: DS.attr('number'),
  teamBScore: DS.attr('number'),
  matchDate: DS.attr('date'),
  deadline: DS.attr('date'),
  limit: DS.attr('number'),
  state: DS.attr('string'),
  venue: DS.attr('string')
});

App.Match.FIXTURES = [
  {
    id: 1000,
    teamAScore: 33,
    teamBScore: 27,
    matchDate: "2013-09-06"
  },
  {
    id: 1001,
    teamAScore: 10,
    teamBScore: 13,
    matchDate: "2013-08-31"
  }
];
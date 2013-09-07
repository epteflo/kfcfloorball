App.MatchesController = Em.ArrayController.extend({
  actions: {
    hello: function(match){
      console.log(match.toString());
    }
  }
});


App.MapRoute = Ember.Route.extend({
  model: function() {
    var model = $.getJSON("https://api.foursquare.com/v2/users/self/checkins"+
      "?oauth_token="+accessToken
      );
    return model;
  },

  afterModel: function(model, transition) {
    console.log(model.response.checkins.items);


  }
});
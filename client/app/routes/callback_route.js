App.CallbackRoute = Ember.Route.extend({
  model: function(params) {
    // TODO: This is a hack to store it on the window
    window.accessToken = params.access_token;

    var model = $.getJSON("https://api.foursquare.com/v2/users/self/checkins"+
      "?oauth_token="+accessToken
      );
    console.log(model);
    return model;
  }
});
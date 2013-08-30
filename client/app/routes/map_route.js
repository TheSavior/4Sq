App.MapRoute = Ember.Route.extend({
  model: function() {
    var model = $.getJSON("https://api.foursquare.com/v2/users/self/checkins"+
      "?oauth_token="+accessToken
      );
    return model;
  },

  afterModel: function(model, transition) {
    console.log(model.response.checkins.items);

    /*var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    /*
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
    }
    */
  }
});
App.MapView = Ember.View.extend({
  templateName: 'map_view',


  didInsertElement: function() {
    var checkins = this.get('context').content.response.checkins.items;

    // initialization work here
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });



    for (var i = 0; i < checkins.length; i++) {
      var loc = checkins[i].venue.location;

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(loc.lat, loc.lng),
        map: map
      });

    }

  }
});
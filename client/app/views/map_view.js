App.MapView = Ember.View.extend({
  templateName: 'map_view',


  didInsertElement: function() {
    console.log("ins");
    console.log(this.get('content'));
    // initialization work here
  }
});
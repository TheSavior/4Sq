App.CallbackRoute = Ember.Route.extend({
  model: function(params) {
    // TODO: This is a hack to store it on the window
    window.accessToken = params.access_token;
    this.transitionTo('map');
  }
});
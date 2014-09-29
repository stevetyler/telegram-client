import Ember from 'ember';

export
default Ember.Route.extend({

  // transitions to my-stream rather than login if authenticated
  beforeModel: function() {
    var session = this.get('session');
    if (session.user) {
      this.transitionTo('myStream');
    }
    else {
      this.transitionTo('telegram');
    }
  }
});

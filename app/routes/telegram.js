import Ember from 'ember';

export
default Ember.Route.extend({
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

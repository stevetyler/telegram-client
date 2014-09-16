import Ember from 'ember';

export
default Ember.Route.extend({
  beforeModel: function() {
    var session = this.get('session');
    if (session.user) {
      this.transitionTo('my-stream');
    }
    else {
      this.transitionTo('telegram');
    }
  }


});

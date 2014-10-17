import Ember from 'ember';

export
default Ember.Route.extend({

  // beforeModel hook is called before the router attempts to resolve the model for the given route.
  // beforeModel: function() {
  //   var session = this.get('session');
  //   if (session.user) {
  //     this.transitionTo('myStream');
  //   }
  //   else {
  //     this.transitionTo('telegram');
  //   }
  // }
});

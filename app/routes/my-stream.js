import Ember from 'ember';

export
default Ember.Route.extend({

  beforeModel: function() {
    var loggedIn = this.get('session.isAuthenticated');

    if (!loggedIn) {
        this.transitionTo('/');
    }
  },

  model: function() {
    // var route = this;

    // http://emberjs.com/api/data/classes/DS.Store.html#method_filter
    // Takes a type and filter function, and returns a live RecordArray that remains up to date as new records are loaded into the store or created locally.
    return this.store.filter('post', { operation: 'myStream' }, function (post){

      return post;
    });
  }
});


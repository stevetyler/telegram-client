import Ember from 'ember';

export
default Ember.Route.extend({

  model: function() {
    var route = this;

    return this.store.filter('post', { operation: 'myStream' }, function (post) {
      if (post.get('user').id === route.get('session.user.id')) {
          return true;
      } else {
          return post.get('user').get('isFollowed');
      }
    });
  }
});

import Ember from 'ember';

export
default Ember.Route.extend({

  model: function() {
    var userId = this.modelFor('user').get('id');  // look up modelFor!
    // console.log('posts route', userId);
    return this.store.find('post', {operation: 'userPosts', user: userId});
  }
});

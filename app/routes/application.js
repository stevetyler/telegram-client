import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    var route = this;
    var promise = this.store.find('user', {operation: 'authenticated'});
    return promise.then(function(users) {
      if (users && users.get('length') > 0) {
          var user = users.get('firstObject');
          route.set('session.user', user);
      }
      return users;
    });
  },
  // actions: {
  //   logOut: function() {
  //     console.log('log out');
  //     var route = this;

  //     this.store.find('user', { operation: 'logout' }).then(function() {
  //         console.log('logout promise returned');
  //         route.store.unloadAll('post');
  //         route.store.unloadAll('user');
  //         route.session.set('user', null);
  //         route.transitionTo('/');
  //     });
  //   }
  // }
});


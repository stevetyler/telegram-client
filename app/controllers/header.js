// taken from http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

import Ember from 'ember';

export
default Ember.ObjectController.extend({

  actions: {
    logOut: function() {
      console.log('log out');
      var route = this;

      this.store.find('user', { operation: 'logout' }).then(function() {
          console.log('logout promise returned');
          route.store.unloadAll('post');
          route.store.unloadAll('user');
          route.session.set('user', null);
          route.transitionTo('/');
      });
    }
  }
});

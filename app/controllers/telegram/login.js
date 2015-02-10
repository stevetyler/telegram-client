// taken from http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

import Ember from 'ember';

export
default Ember.Controller.extend({ // route has no model (not displaying data) so use Controller not ObjectController

  loginFailed: false,
  isProcessing: false,

  actions: {

    login: function() {
      var controller = this;
      var username = this.get('username');
      var password = this.get('password');
      this.setProperties({
        loginFailed: false,
        isProcessing: true
      });

      if (username && password) {
        password = Ember.$.md5(password + username); // hash username & password

        controller.store.find('user', {username: username, password: password, operation: 'login'}).then(function(users) {
          // need to handle error for incorrect user or password
          // http://stackoverflow.com/questions/23605091/unable-to-catch-404-error-resource-not-found-in-ember-js-setupcontroller-hook

          var user = users.get('firstObject'); // lookup
          // controller.set('isProcessing', false);
          controller.get('session').set('user', user);
          controller.transitionToRoute('myStream');
          controller.set('username', null);
          controller.set('password', null);
        }, function() {
          controller.set('loginFailed', true);
        });
      }
      else {
        controller.set('loginFailed', true);
        console.log(controller.get('loginFailed'));
      }
    }
  }
});

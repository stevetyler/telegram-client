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

            this.store.find('user', username).then(function(user) {
                controller.set("isProcessing", false);
                if (user.get('password') === password) {
                    controller.transitionToRoute('myStream');
                } else {
                    controller.set("loginFailed", true);
                }
            });
        }
    }
});
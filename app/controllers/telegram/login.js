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

            this.store.find('user', {username: username, password: password, operation: 'login'}).then(function(users) {

                // http://emberjs.com/api/classes/Ember.ArrayProxy.html
                // Ember.A() === Ember.Array when prototype extensions are off
                var ap = Ember.ArrayProxy.create({content: Ember.A(users)});
                var user = ap.get('firstObject');

                if (!user) {
                    controller.set("loginFailed", true);
                    console.log("incorrect password");
                }
                else {
                    controller.set("isProcessing", false);
                    controller.get('session').set('user', user);
                    controller.transitionToRoute('myStream');
                }
            });
        }
    }
});

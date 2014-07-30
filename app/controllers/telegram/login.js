// taken from http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

import Ember from 'ember';

export
default Ember.ObjectController.extend({

    loginFailed: false,
    isProcessing: false,

    content: {}, // gives assertion error without. Alternatively just use Controller

    actions: {

        login: function() {

            var controller = this;
            var username = this.get('username');
            var password = this.get('password');
            this.setProperties({
                loginFailed: false,
                isProcessing: true
            });

            var user = this.store.find('user', username).then(function() {
                controller.set("isProcessing", false);
            }.bind(controller), function() {
                controller.set("isProcessing", false);
                controller.set("loginFailed", true);
            }.bind(controller));

            if (user.password === password) {
                // check passwords match ?
                controller.transitionToRoute('username');
            }
            console.log(user.password);
        }
    }
});
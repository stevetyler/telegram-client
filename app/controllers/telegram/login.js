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
            var username = this.get('id');
            console.log(username);
            this.setProperties({
                loginFailed: false,
                isProcessing: true
            });

            this.store.find('user', username).then(function() {
                controller.set("isProcessing", false);

                // check passwords match ?
                controller.transitionToRoute('username', {
                    path: ':id'
                });
            }.bind(controller), function() {
                controller.set("isProcessing", false);
                controller.set("loginFailed", true);
            }.bind(controller));
        }
    }

});
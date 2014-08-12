import Ember from 'ember';

export
default Ember.Controller.extend({ // route has no model (not displaying data) so use Controller not ObjectController

    loginFailed: false,
    isProcessing: false,

    actions: {

        create: function() {
            var controller = this;
            var username = this.get('username');
            var password = this.get('password');

            this.store.createRecord('user').then(function(user) {
                controller.set('username', username);
                controller.set('password', password);
                controller.set("isProcessing", false);
                controller.get('session').set('user', user);
                controller.transitionToRoute('myStream');
            });
        }
    }
});
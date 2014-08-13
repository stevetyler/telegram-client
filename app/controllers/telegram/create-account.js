import Ember from 'ember';

export
default Ember.Controller.extend({ // route has no model (not displaying data) so use Controller not ObjectController

    loginFailed: false,
    isProcessing: false,

    actions: {

        create: function() {
            var controller = this;
            var name = this.get('name');
            var username = this.get('username');
            var password = this.get('password');

            var newUser = this.store.createRecord('user', {
                name: name,
                username: username,
                password: password
            });
            // controller.set("isProcessing", false);
            newUser.save();
            controller.get('session').set('user');
            controller.transitionToRoute('myStream');
        }
    }
});
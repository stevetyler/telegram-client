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

            password = Ember.$.md5(password + username);
            // console.log(password);

            if (username && name && password) {
                var newUser = this.store.createRecord('user', {
                    name: name,
                    id: username,
                    password: password
                });
                // controller.set("isProcessing", false);
                newUser.save();
                controller.get('session').set('user', newUser);
                controller.set('name', '');
                controller.set('username', '');
                controller.set('password', '');
                controller.transitionToRoute('myStream');
            }
        }
    }
});

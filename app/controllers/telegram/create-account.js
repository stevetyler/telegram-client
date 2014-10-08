import Ember from 'ember';

export
default Ember.Controller.extend({ // route has no model (not displaying data) so use Controller not ObjectController

    loginFailed: false,
    isProcessing: false,

    actions: {

        create: function() {
            var controller = this;
            var name = this.get('name');
            var id = this.get('id');
            var password = this.get('password');

            var newUser = this.store.createRecord('user', {
                name: name,
                id: id,
                password: password
            });
            // controller.set("isProcessing", false);
            newUser.save();
            controller.get('session').set('user');
            controller.transitionToRoute('myStream');
        }
    }
});

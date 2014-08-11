import Ember from 'ember';

export
default Ember.Controller.extend({ // route has no model (not displaying data) so use Controller not ObjectController

    loginFailed: false,
    isProcessing: false,

    actions: {

        create: function() {
            var controller = this;
            var username = this.get('username');

            this.store.createRecord('user', username).then(function(user) {
                controller.set("isProcessing", false);

            });
        }
    }
});
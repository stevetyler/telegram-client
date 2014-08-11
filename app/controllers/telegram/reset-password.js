import Ember from 'ember';

export
default Ember.Controller.extend({ // route has no model (not displaying data) so use Controller not ObjectController

    loginFailed: false,
    isProcessing: false,

    actions: {

        reset: function() {
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
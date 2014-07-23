// taken from http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

import Ember from 'ember';

export
default Ember.Controller.extend({ // use ObjectController ?

    loginFailed: false,
    isProcessing: false,

    actions: {
        login: function() {
            this.setProperties({
                loginFailed: false,
                isProcessing: true
            });

            $.post("/login", {
                username: this.get("username"),
                password: this.get("password")
            }).then(function() {
                this.set("isProcessing", false);
                document.location = "/telegram";
            }.bind(this), function() {
                this.set("isProcessing", false);
                this.set("loginFailed", true);
            }.bind(this));
        }
    }

});
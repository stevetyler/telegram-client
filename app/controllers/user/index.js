// taken from http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

import Ember from 'ember';

export
default Ember.Controller.extend({ // route has no model (not displaying data) so use Controller not ObjectController


    actions: {

        follow: function() {
            var controller = this;
            var IdToFollow = this.get('id');

            this.store.find('user', {followUserId: IdToFollow}).then(function() {

            });



        }
    }
});

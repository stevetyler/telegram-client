// taken from http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

import Ember from 'ember';

export
default Ember.ObjectController.extend({




    actions: {

        follow: function() {
            var controller = this;
            var IdToFollow = this.get('id');

            // queries go to api/users
            this.store.find('user', {followUserId: IdToFollow}).then(function() {

            });
        },
        unfollow: function() {

        }
    }
});

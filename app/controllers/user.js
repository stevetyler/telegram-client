// taken from http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

import Ember from 'ember';

export
default Ember.ObjectController.extend({

    actions: {

        follow: function() {
            console.log('clicked');
            var controller = this;

            this.store.find('user', {followUserId: this.get('id')}).then(function() {
                    controller.set('isFollowed', true);
                }
            );

        },
        unfollow: function() {
            console.log('clicked');
            var controller = this;

            this.store.find('user', {unFollowUserId: this.get('id')}).then(function() {
                    controller.set('isFollowed', false);
                }
            );
        }
    }
});

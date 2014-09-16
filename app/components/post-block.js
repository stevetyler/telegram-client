import Ember from 'ember';

export
default Ember.Component.extend({
	// isAuthenticated : false,

  authenticatedUser : function(authUser) {
    var user = this.get('post.user');

    if (user === authUser) {
        // this.set('isAuthenticated', true);
        return true;
    }
    else {
        // this.set('isAuthenticated', false);
        // console.log(user);
        return false;
    }

  }.property('authenticatedUser'),

	actions: {

		// Action has access to post parameter ie post in controller
		delete: function(post) {
			post.deleteRecord();
			post.save();
		}
	}
});


import Ember from 'ember';

export
default Ember.Component.extend({
	// isAuthenticated : false,

  belongsToAuthenticatedUser : function() {

    return this.get('post.user') === this.get('authenticatedUser');

  }.property('authenticatedUser', 'post.user'),

  displayDate: function() {
      var time = moment(this.get('post.createdDate')).fromNow();
      return time;
    }.property('post.createdDate'),

  actions: {
		// Action has access to post parameter ie post in controller
		delete: function(post) {
			post.deleteRecord();
			post.save();
		}
	}
});


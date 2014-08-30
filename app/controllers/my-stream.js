import Ember from 'ember';

export
default Ember.ArrayController.extend({

	actions: {
		publish: function() {
			// var controller = this;
			var publish = this.get('newPost');
			var date = Date.now(); 
			var newPost = this.store.createRecord('post', {
				body: publish,
				user: this.get('session.user'),
				createdDate: date 
			});
			newPost.save();
			this.set('newPost', null);
		},
		// Action has access to post parameter ie post in controller
		delete: function(post) {
			post.deleteRecord();
			post.save();
		}
	}
});
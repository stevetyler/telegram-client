import Ember from 'ember';

export
default Ember.ArrayController.extend({

	postDate : function() {
		// computed property
	},

    actions: {

		publish: function() {
			// var controller = this;
			var publish = this.get('newPost');
			var date = Date.now();
			// console.log(publish);
			var newPost = this.store.createRecord('post', {
				body: publish,
				name: this.get('session.name')
			});
			newPost.save();
			this.set('newPost', null);
			// this.set('date', date);
			
		},
		// how does this work ?
		delete: function(post) {
			post.deleteRecord();
			post.save();
		}
	}
});
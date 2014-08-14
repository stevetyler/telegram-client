import Ember from 'ember';

export
default Ember.ArrayController.extend({

    actions: {

		publish: function() {
			// var controller = this;
			var publish = this.get('post');
			// console.log(publish);
			var newPost = this.store.createRecord('post', {
				body: publish
				});
			newPost.save();
			// clear post input field
		}	
	}
});
import Ember from 'ember';

export
default Ember.ArrayController.extend({
	characters: 150,

	charLimit: false,
	
	actions: {		
		showCharacters: function(txt) {			
			var text = 150 - txt;
			this.set('characters', text);
			if (text < 0) {
				this.set('charLimit', true);
			}
			else {
				this.set('charLimit', false);
			}
		},

		publish: function() {
			// var controller = this;
			var publish = this.get('newPost');
			var date = new Date(); 
			var limit = this.get('charLimit');
			if (publish && !limit) {
				var newPost = this.store.createRecord('post', {
					body: publish,
					user: this.get('session.user'),
					createdDate: date 
				});
				newPost.save();
				this.set('newPost', null);
				this.set('characters', 150);
				this.set('charLimit', false);
			}
		},
		
		// Action has access to post parameter ie post in controller
		delete: function(post) {
			post.deleteRecord();
			post.save();
		}
	}
});


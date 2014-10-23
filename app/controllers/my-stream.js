import Ember from 'ember';

export
default Ember.ArrayController.extend({
	authenticatedUser : false,

	newPost: '',

	time: moment().format("MMM Do YYYY"),

	characters: function() {
            return 140 - this.get('newPost').length;
		}.property('newPost'),

	charLimit: function() {
            return this.get('characters') < 0;
        }.property('characters'),

	actions: {
        logout: function() {
            var controller = this;

            Ember.$.get('/api/logout', function() {
                controller.get('session').set('user', []);
                controller.transitionToRoute('/');  // why not 'login' ?
                console.log('logout success');
            });
        },
		publish: function() {

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
				this.set('characters', 140);
				this.set('charLimit', false);
			}
		},

		// Action has access to post parameter ie post in controller
		delete: function() {
            this.store.find('post', this.get('model').id).then(function (post) {
                post.deleteRecord();
                post.save();
            });
        }
	}
});


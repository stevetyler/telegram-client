import Ember from 'ember';

export
default Ember.ArrayController.extend({

  authenticatedUser : false,
  newPost: '',
  sortAscending: false,
  sortProperties: ['createdDate'],
  maxLength: 140,

	charCount: function() {
    return this.get('maxLength') - this.get('newPost').length;
	}.property('newPost', 'maxLength'),

	charLimit: function() {
    return this.get('charCount') < 0;
  }.property('charCount'),

	actions: {

		publish: function() {
      var controller = this;
			var publish = this.get('newPost');
			var date = new Date();
			var limit = this.get('charLimit');

			if (publish && !limit) {
				var newPost = this.store.createRecord('post', {
					body: publish,
					user: this.get('session.user'),
          createdDate: date,
				});
				newPost.save().then(function() {
          controller.set('newPost', '');
        });
  		}
		}
	}
});


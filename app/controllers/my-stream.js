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

  urlify: function(text) {
    // http://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
      return new Ember.Handlebars.SafeString('<a href="' + url + '">' + url + '</a>');
    });
  },

	actions: {

		publish: function() {
      var controller = this;
			var publish = this.get('newPost');
			var date = new Date();
			var limit = this.get('charLimit');

			if (publish && !limit) {
        // publish = this.urlify(publish);

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


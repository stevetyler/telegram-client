import Ember from 'ember';

export
default Ember.ArrayController.extend({

    actions: {
    	createPost: function() {
    		var controller = this;
    		var post = this.get('post');
    		console.log(post);
    	}
    }
});
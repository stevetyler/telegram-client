import Ember from 'ember';

export
default Ember.ArrayController.extend({

    actions: {
	publish: function() {
		var controller = this;
		var publish = this.get('post');
		console.log(publish);
    	}
    }
});
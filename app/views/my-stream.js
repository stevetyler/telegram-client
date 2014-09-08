import Ember from 'ember';

export default Ember.View.extend({

	keyUp : function() {
		var text = this.get('controller.newPost');
		this.get('controller').send('showCharacters', text.length);
	}
});
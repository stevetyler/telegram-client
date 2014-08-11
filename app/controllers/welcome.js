import Ember from 'ember';

export default Ember.ObjectController({
	uppercaseName: function() {
	console.log('The session object is accessible from any controller:', this.get('session.user.name'), this.get('session.isAuthenticated'));
    return this.get('model').get('name').toUpperCase();
  }.property('model.name')
});
import Ember from 'ember';

export default {
	name: 'session',
	initialize: function(container, app) {
		var Session = Ember.Object.extend({
			user: null,
			isAuthenticated: function() {
				return this.get('user') !=null;
			}.property('user')		
		});
		// http://emberjs.com/api/classes/Ember.Application.html#method_register
		app.register('session:main', Session);
		// http://emberjs.com/api/classes/Ember.Application.html#method_inject
		app.inject('route', 'session', 'session:main');
		app.inject('controller', 'session', 'session:main');
	}
};
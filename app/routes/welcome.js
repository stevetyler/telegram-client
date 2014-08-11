import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
		return Ember.Object.create({
			name: '' // get authenticated username ?
		});
    },
    setupController: function(controller, model) {
		console.log('The session object is accessible from any route:', this.get('session.isAuthenticated'));
		console.log('We can set the currently authenticated user on the session object, so that we can access it from all the other routes and controllers.');
		this.get('session').set('user', model);
		controller.set('model', model);
    }
});


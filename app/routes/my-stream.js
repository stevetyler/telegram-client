import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
        return this.store.find('post'); // returns a promise but is handled by the route
    },
    setupController: function(controller, model) {
		console.log('The session object is accessible from any route:', this.get('session.isAuthenticated'));
		console.log('We can set the currently authenticated user on the session object, so that we can access it from all the ther routes and controllers.');
		this.get('session').set('user', model);
		controller.set('model', model);
		console.log(this.get('session.user.firstName'));
	}
});
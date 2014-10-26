import Ember from 'ember';

export
default Ember.Route.extend({

    model: function() {

        var userId = this.modelFor('user').id;  // look up modelFor!
        console.log('followers of', userId);
        return this.store.find('user', {followedBy: userId}); // returns a promise but is handled by the route
    }
});

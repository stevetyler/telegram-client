import Ember from 'ember';

export
default Ember.Route.extend({

    model: function() {

        var userId = this.modelFor('user').id;  // look up modelFor!
        console.log('posts route', userId);
        return this.store.find('post', {ownedBy: userId}); // returns a promise but is handled by the route
    }
});

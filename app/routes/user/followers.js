import Ember from 'ember';

export
default Ember.Route.extend({

    model: function() {

        var userId = this.modelFor('user').id;  // look up modelFor!
        console.log('followers of', userId);

        return this.store.find('user', {operation: 'followers', userId: userId});
    }
});

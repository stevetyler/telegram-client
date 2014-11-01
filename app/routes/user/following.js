import Ember from 'ember';

export
default Ember.Route.extend({

    model: function() {

        // change to user
        var userId = this.modelFor('user').id;  // look up modelFor!
        console.log('Users following', userId);

        return this.store.find('user', {operation: 'following', userId: userId});
        // rename to userID
    }
});

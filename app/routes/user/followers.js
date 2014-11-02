import Ember from 'ember';

export
default Ember.Route.extend({

    model: function() {

        var user = this.modelFor('user');  // look up modelFor!
        // console.log('followers of', user.id);

        return this.store.find('user', {operation: 'followers', userId: user.id});
    }
});

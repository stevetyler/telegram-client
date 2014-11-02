import Ember from 'ember';

export
default Ember.Route.extend({

    model: function() {

        var user = this.modelFor('user');  // look up modelFor!
        // console.log('Users following', userId);

        return this.store.find('user', {operation: 'following', userId: user.id});
    }
});

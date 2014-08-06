import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
        return this.store.find('post'); // returns a promise but is handled by the route
    }

});
import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
        return this.store.find('post'); // returns a promise !!
    },
    renderTemplate: function() {
        this.render('my-stream');
        this.render('posts', {
            into: 'my-stream',
            controller: 'posts'
        });
    }
});
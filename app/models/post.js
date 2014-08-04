import DS from 'ember-data';

var Post = DS.Model.extend({
    // id: DS.attr('text'),  Error: You may not set `id` as an attribute on your model.
    title: DS.attr('string'),
    author: DS.belongsTo('user'), // ?
    date: DS.attr('date'),
    body: DS.attr('string')
});

Post.reopenClass({
    FIXTURES: [{
        id: 'stevetyler',
        title: 'My first post',
        author: 'stevetyler',
        date: '',
        body: 'Ember is great!'
    }, {
        id: 'vivhoford',
        title: 'My first post',
        author: 'vivhoford',
        date: '',
        body: 'What\'s Ember?'

    }, {
        id: 'rachelblanton',
        title: 'My first post',
        author: 'rachelblanton',
        date: '',
        body: 'I have no idea what you\'re talking about'
    }]
});

export
default Post;
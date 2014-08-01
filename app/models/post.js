import DS from 'ember-data';

var Post = DS.Model.extend({
    id: DS.attr('string'),
    // username: DS.attr('string'),
    title: DS.attr('string'),
    author: DS.belongsTo('user'), // ?
    date: DS.attr('date'),
    body: DS.attr('string')
});

Post.reopenClass({
    FIXTURES: [{
        id: 'stevetyler',
        title: 'My first post',
        author: '',
        date: '',
        body: 'Ember is great!'
    }, {
        id: 'vivhoford',
        title: 'My first post',
        author: '',
        date: '',
        body: 'What\'s Ember?'

    }, {
        id: 'rachelblanton',
        title: 'My first post',
        author: '',
        date: '',
        body: 'I have no idea what you\'re talking about'
    }]
});

export
default Post;
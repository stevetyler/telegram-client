import DS from 'ember-data';

var Post = DS.Model.extend({
    // id: DS.attr('text'),  Error: You may not set `id` as an attribute on your model ?
    title: DS.attr('string'),
    user: DS.belongsTo('user'), // ?
    date: DS.attr('date'),
    body: DS.attr('string')
});

Post.reopenClass({
    FIXTURES: [{
        id: 'id1',
        title: 'My first post',
        user: 'stevetyler',
        date: '',
        body: 'Ember is great!'
    }, {
        id: 'id2',
        title: 'My first post',
        user: 'vivhoford',
        date: '',
        body: 'What\'s Ember?'

    }, {
        id: 'id3',
        title: 'My first post',
        user: 'rachelblanton',
        date: '',
        body: 'I have no idea what you\'re talking about'
    }]
});

export
default Post;
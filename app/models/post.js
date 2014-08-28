import DS from 'ember-data';

var Post = DS.Model.extend({
    // id: DS.attr('text'),  Error: You may not set `id` as an attribute on your model ?
    title: DS.attr('string'),
    user: DS.belongsTo('user'), // ?
    date: DS.attr('date'),
    body: DS.attr('string'),
    elapsedTime: function() {
            
        }.property('date')
});

Post.reopenClass({
    FIXTURES: [{
        id: 'id1',
        user: 'stevetyler',
        date: '1411516800000',
        body: 'Ember is great!',
    }, {
        id: 'id2',
        user: 'vivhoford',
        date: '1411603200000',
        body: 'What\'s Ember?',

    }, {
        id: 'id3',
        user: 'rachelblanton',
        date: '1411689600000',
        body: 'I have no idea what you\'re talking about',
    }]
});

export
default Post;
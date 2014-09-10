import DS from 'ember-data';

var Post = DS.Model.extend({
    // id: DS.attr('text'),  Error: You may not set `id` as an attribute on your model ?
    title: DS.attr('string'),
    user: DS.belongsTo('user'), 
    createdDate: DS.attr('string'), // for 'date' attr use new Date() which creates a date object
    body: DS.attr('string'),
    elapsedTime: function() {
        var now = Date.now(),
            createdDate = this.get('createdDate');
         
        return Date(createdDate);
        
        }.property('createdDate')
});

Post.reopenClass({
    FIXTURES: [{
        id: 'id1',
        user: 'stevetyler',
        createdDate: new Date(2014, 10, 5),
        body: 'Ember is great!',
    }, {
        id: 'id2',
        user: 'vivhoford',
        createdDate: new Date(2014, 10, 6),
        body: 'What\'s Ember?',

    }, {
        id: 'id3',
        user: 'rachelblanton',
        createdDate: new Date(2014, 10, 8),
        body: 'I have no idea what you\'re talking about',
    }]
});

export
default Post;
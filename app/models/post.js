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
        if (now - createdDate){    
            return Math.floor((now - createdDate) / 60000);
        }
        }.property('createdDate')
});

Post.reopenClass({
    FIXTURES: [{
        id: 'id1',
        user: 'stevetyler',
        createdDate: '1408924800000',
        body: 'Ember is great!',
    }, {
        id: 'id2',
        user: 'vivhoford',
        createdDate: '1409011200000',
        body: 'What\'s Ember?',

    }, {
        id: 'id3',
        user: 'rachelblanton',
        createdDate: '1409097600000',
        body: 'I have no idea what you\'re talking about',
    }]
});

export
default Post;
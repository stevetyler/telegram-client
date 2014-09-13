import DS from 'ember-data';

var Post = DS.Model.extend({
    // id: DS.attr('text'),  Error: You may not set `id` as an attribute on your model ?
    title: DS.attr('string'),
    user: DS.belongsTo('user'), 
    createdDate: DS.attr('date'), 
    body: DS.attr('string'),
    // elapsedTime: function() {
    //     var now = Date.now(),
    //         createdDate = this.get('createdDate');
         
    //     return Date(createdDate);
        
    //     }.property('createdDate')
});

// App.Requirement = DS.Model.extend({


// });


Post.reopenClass({
    FIXTURES: [{
        id: 'id1',
        user: 'stevetyler',
        // createdDate: moment(2014, 8, 5),
        body: 'Ember is great!',
    }, {
        id: 'id2',
        user: 'vivhoford',
        //createdDate: moment(2014, 8, 6),
        body: 'What\'s Ember?',

    }, {
        id: 'id3',
        user: 'rachelblanton',
        //createdDate: moment(2014, 8, 8),
        body: 'I have no idea what you\'re talking about',
    }]
});

export
default Post;
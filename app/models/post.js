import DS from 'ember-data';
// import moment from 'bower_components//moment';

var Post = DS.Model.extend({
    // id: DS.attr('text'),  Error: You may not set `id` as an attribute on your model ?
    title: DS.attr('string'),
    user: DS.belongsTo('user'),
    createdDate: DS.attr('date'),
    body: DS.attr('string'),
    displayDate: function() {
        var date = this.get('createdDate');
        var now = moment();

          // show mins / hrs if less than a day
          return moment(date).format("MMM Do");
        }.property('createdDate')
});


Post.reopenClass({
    FIXTURES: [{
        id: 'id1',
        user: 'stevetyler',
        createdDate: new Date(2014, 8, 5),
        body: 'Ember is great!',
    }, {
        id: 'id2',
        user: 'vivhoford',
        createdDate: new Date(2014, 8, 6),
        body: 'What\'s Ember?',

    }, {
        id: 'id3',
        user: 'rachelblanton',
        createdDate: new Date(2014, 8, 8),
        body: 'I have no idea what you\'re talking about',
    }]
});

export
default Post;

import DS from 'ember-data';

var Post = DS.Model.extend({
    title: DS.attr('string'),
    author: DS.belongsTo('user'), // ?
    date: DS.attr('date'),
    body: DS.attr('string')
});

Post.reopenClass({
    FIXTURES: [{
        id: 'stevetyler_uk',
        title: '',
        author: '',
        date: '',
        body: ''
    }]
});

export
default Post;
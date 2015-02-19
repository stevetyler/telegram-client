import DS from 'ember-data';
// moment is a global variable

var Post = DS.Model.extend({
    // id: DS.attr('text'),  Error: You may not set `id` as an attribute on your model ?
    title: DS.attr('string'),
    user: DS.belongsTo('user'), // author
    ownedBy: DS.belongsTo('user'), // original author
    createdDate: DS.attr('date'),
    body: DS.attr('string')
});

export
default Post;

import DS from 'ember-data';
// import moment from 'bower_components//moment';

var Post = DS.Model.extend({
    // id: DS.attr('text'),  Error: You may not set `id` as an attribute on your model ?
    title: DS.attr('string'),
    user: DS.belongsTo('user'),
    createdDate: DS.attr('date'), // cannot change name to 'timestamp' etc ???
    body: DS.attr('string'),
    // cannot move computed property to controller for some reason
    displayDate: function() {
      var time = moment(this.get('createdDate')).fromNow();
      return time;
    }.property('createdDate'),

});

export
default Post;

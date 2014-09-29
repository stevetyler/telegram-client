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
        // var now = moment();

          // show mins / hrs if less than a day
          return moment(date).format("MMM Do");
        }.property('createdDate')
});

export
default Post;

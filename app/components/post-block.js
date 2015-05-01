import Ember from 'ember';

export
default Ember.Component.extend({

  authenticatedUser : '',

  belongsToAuthenticatedUser : function() {

    return this.get('post.user') === this.get('authenticatedUser');

  }.property('authenticatedUser', 'post.user'),

  displayDate: function() {
      var time = moment(this.get('post.createdDate')).fromNow();
      return time;
    }.property('post.createdDate'),

  repostConfirm: false,

  // event handlers

  deletePost: function() {
    console.log('jquery deletePost inside of component');

    // clone ??
    var that = this.$().clone();
    this.$().prev().before(that);
    that.fadeOut('slow', function() {
      that.remove();
    });
  }.on('willDestroyElement'),

  // insertPost: function() {
  //   this.$().hide().slideDown('slow');
  //   console.log('didInsertElement called');
  // }.on('didInsertElement'),

  repostLink: function() {
    return this.get('repostConfirm') ? 'unRepost' : 'repost';
  }.property('repostConfirm'),

  actions: {
    repost: function() {
      console.log('repost called');
      this.set('repostConfirm', true);
      console.log(this.get('repostConfirm'));
    },
    delete: function(post) {
      post.deleteRecord();
      post.save();
    }
  }
});


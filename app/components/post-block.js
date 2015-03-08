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

  // not actions because of jQuery? Lookup!
  // insertPost: function() {
  //   this.Ember.$().hide().slideDown('slow');
  //   console.log('didInsertElement called');
  // }.on('didInsertElement'),

  // deletePost: function() {
  //   console.log('jquery deletePost inside of component');
    
  //   // clone ??
  //   var that = this.Ember.$().clone();
  //   this.Ember.$().prev().before(that);
  //   that.slideUp('slow', function() {
  //     that.remove();
  //   });
  // }.on('willDestroyElement'),

  actions: {
    repost: function() {
      console.log('repost called');
      this.set('repostConfirm', true);
    },
    

		// Action has access to post parameter ie post in controller
		delete: function(post) {
			post.deleteRecord();
			post.save();
		}
  } 
});


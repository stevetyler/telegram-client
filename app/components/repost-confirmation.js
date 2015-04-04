import Ember from 'ember';

export
default Ember.Component.extend({
  // specify which class names are applied to component
  // classNames: ['repost-confirmation', 'tele-post'],
  postAction: true,

  actions: {
    yesRepost: function() {
      this.sendAction('yesRepost');
      this.$().slideUp('slow');
    },
    noRepost: function() {
      this.sendAction('noRepost');
      this.destroy();
    }
  },

  insertPost: function() {
    this.$().hide().slideDown('slow');
    this.set('postAction', false);
    console.log('didInsertElement called');
  }.on('didInsertElement'),

  deletePost: function() {
    console.log('jquery deletePost inside of component');
    var that = this.$().clone();
    this.$().prev().before(that);
    that.slideUp('slow', function() {
        that.remove();
    });
  }.on('willDestroyElement')
});



import Ember from 'ember';

export
default Ember.ObjectController.extend({


	repostConfirm: false,

	repostLink: function() {
        return this.get('repostConfirm') ? 'Unrepost' : 'Repost';
    }.property('repostConfirm'),

	actions: {
    delete: function() {
      this.store.find('post', this.get('model').id).then(function (post) {
        post.deleteRecord();
        post.save();
      });
    },
    repost: function() {
      if (this.get('repostConfirm')) {
        this.set('repostConfirm', false);   
      } else {
        this.set('repostConfirm', true);    
      } 
    },

    unrepost: function() {
      this.set('repostConfirm', false);
    }

    // yesRepost: function() {
    //   console.log('yesRepost from the post controller.');
    // }
	}
});

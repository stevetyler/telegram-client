
import Ember from 'ember';

export
default Ember.ObjectController.extend({

  time: function() {
    var time = moment(this.get('timestamp')).fromNow();
    return time;
  }.property(),

  actions: {
    delete: function() {
      this.store.find('post', this.get('model').id).then(function (post) {
        post.deleteRecord();
        post.save();
      });
    }

  }
});

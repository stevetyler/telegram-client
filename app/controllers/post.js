
import Ember from 'ember';

export
default Ember.ObjectController.extend({

  // property not working
  time: function() {
    var time = moment(this.get('createdDate')).fromNow();
    console.log(time);
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

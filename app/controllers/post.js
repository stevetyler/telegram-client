
import Ember from 'ember';

export
default Ember.ObjectController.extend({

  actions: {
    delete: function() {
      this.store.find('post', this.get('model').id).then(function (post) {
        post.deleteRecord();
        post.save();
      });
    }
  }
});

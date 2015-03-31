import Ember from 'ember';

var Router = Ember.Router.extend({
    location: TelegramMainENV.locationType
});

Router.map(function() {
  this.resource('telegram', {
    path: '/'
  }, function() {
    this.route('login', {
        path: '/'
    });
    this.route('createAccount', {
        path: '/create-account'
    });
    this.route('resetPassword', {
        path: '/reset-password'
    });
    this.route('resetSuccess', {
        path: '/reset-success'
    });
  });
  this.resource('user', {
    path: '/:user_id'
  }, function() {
    this.route('posts');
    this.route('following');
    this.route('followers'); // private
  });
  this.route('myStream', {
    path: '/my-stream' // private
  });
});

export
default Router;

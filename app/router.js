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
    this.resource('username', {
        path: '/:username'
    }, function() {
        this.route('profile', {
            path: '/'
        });
        this.route('following');
        this.route('followers'); // private
        this.route('posts'); // private
    });
    this.route('post', {
        path: '/:username/posts/:post'
    });

    this.route('myStream', {
        path: '/my-stream' // private
    });
});

export
default Router;
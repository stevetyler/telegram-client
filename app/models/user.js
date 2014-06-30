import DS from 'ember-data';

var User = DS.Model.extend({
    email: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('boolean'),
    imageURL: DS.attr('string'),
    followers: DS.attr('array')
});

User.reopenClass({
    FIXTURES: [{
        id: 'stevetyler_uk',
        firstName: 'Steve',
        lastName: 'Tyler',
        imageURL: '',
        // followers: ['', '', '', '']
    }]
});

export
default User;
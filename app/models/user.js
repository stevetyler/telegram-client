import DS from 'ember-data';

var User = DS.Model.extend({
    email: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('boolean'),
    password: DS.attr('password'),
    imageURL: DS.attr('string')
});

User.reopenClass({
    FIXTURES: [{
        id: 'stevetyler',
        firstName: 'Steve',
        lastName: 'Tyler',
        password: 'steve',
        imageURL: '/assets/img/users/stevetyler.png'
    }, {
        id: 'vivhoford',
        firstName: 'Vivien',
        lastName: 'Hoford',
        password: 'vivien',
        imageURL: '/assets/img/users/vivhoford.png'
    }, {
        id: 'rachelblanton',
        firstName: 'Rachel',
        lastName: 'Blanton',
        password: 'rachel',
        imageURL: '/assets/img/users/rachelblanton.png'
    }]
});

export
default User;
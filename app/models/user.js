import DS from 'ember-data';

var User = DS.Model.extend({
    email: DS.attr('string'),
    name: DS.attr('string'),
    password: DS.attr('string'),
    imageURL: DS.attr('string')
});

User.reopenClass({
    FIXTURES: [{
        id: 'stevetyler',
        name: 'Steve Tyler',
        password: 'steve',
        imageURL: '/assets/img/users/stevetyler.png'
    }, {
        id: 'vivhoford',
        name: 'Vivien Hoford',
        password: 'vivien',
        imageURL: '/assets/img/users/vivhoford.png'
    }, {
        id: 'rachelblanton',
        name: 'Rachel Blanton',
        password: 'rachel',
        imageURL: '/assets/img/users/rachelblanton.png'
    }]
});

export
default User;
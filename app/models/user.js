import DS from 'ember-data';

var User = DS.Model.extend({
    email: DS.attr('string'),
    username: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('boolean'),
    password: DS.attr('password'),
    imageURL: DS.attr('string'),
    followers: DS.attr('array')
});

User.reopenClass({
    FIXTURES: [{
        id: 'stevetyler',
        // username: 'stevetyler',
        firstName: 'Steve',
        lastName: 'Tyler',
        password: 'steve',
        imageURL: '../assets/img/stevetyler-img.png'
    }, {
        id: 'vivhoford',
        // username: 'vivhoford',
        firstName: 'Vivien',
        lastName: 'Hoford',
        password: 'vivien',
        imageURL: '../assets/img/vivhoford-img.png'
    }, {
        id: 'rachelblanton',
        // username: 'rachelblanton',
        firstName: 'Rachel',
        lastName: 'Blanton',
        password: 'rachel',
        imageURL: '../assets/img/rachelblanton-img.png'
    }]
});

export
default User;
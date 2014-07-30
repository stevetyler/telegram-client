import DS from 'ember-data';

var User = DS.Model.extend({
    email: DS.attr('string'),
    username: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('boolean'),
    imageURL: DS.attr('string'),
    followers: DS.attr('array')
});

User.reopenClass({
    FIXTURES: [{
        username: 'stevetyler',
        firstName: 'Steve',
        lastName: 'Tyler',
        password: 'steve',
        imageURL: '../assets/img/stevetyler-img.png'
    }, {
        username: 'vivhoford',
        firstName: 'Vivien',
        lastName: 'Hoford',
        password: 'vivien',
        imageURL: '../assets/img/vivhoford-img.png'
    }, {
        username: 'rachelblanton',
        firstName: 'Rachel',
        lastName: 'Blanton',
        password: 'rachel',
        imageURL: '../assets/img/rachelblanton-img.png'
    }]
});

export
default User;
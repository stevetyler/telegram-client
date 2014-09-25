import DS from 'ember-data';

var User = DS.Model.extend({
    email: DS.attr('string'),
    name: DS.attr('string'),
    password: DS.attr('string'),
    imageURL: DS.attr('string')
});

export
default User;

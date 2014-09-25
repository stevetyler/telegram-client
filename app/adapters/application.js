import DS from 'ember-data';
export
default DS.RESTAdapter.extend();

DS.RESTAdapter.reopen({
  namespace: 'api'
});



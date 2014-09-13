import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'telegram-main', // TODO: loaded via config
  Resolver: Resolver,
  LOG_VIEW_LOOKUPS: true
});

loadInitializers(App, 'telegram-main');

export default App;

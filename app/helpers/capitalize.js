import Ember from 'ember';

function capitalize(value) {
  return value;
}

export {
  capitalize
};

export default Ember.Handlebars.makeBoundHelper(capitalize);

// https://www.npmjs.com/package/ember-cli-auto-register-helpers

import Ember from 'ember';

function html(text) {

  var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(urlRegex, function(url) {
    return new Ember.Handlebars.SafeString('<br /><a href="' + url + '">' + url + '</a>');

  });
}

// why?
export {
  html
};

export default Ember.Handlebars.makeBoundHelper(html);


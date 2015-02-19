// https://www.npmjs.com/package/ember-cli-auto-register-helpers
// helper name needs to be dasherized

import Ember from 'ember';

function html(text) {

  var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  var urlStr = text.replace(urlRegex, function(url) {
    return '<br /><a href="' + url + '" target=" ">' + url + '</a>';
  });
  return new Ember.Handlebars.SafeString(urlStr);
}

// why? 
export {
  html
};

export default Ember.Handlebars.makeBoundHelper(html);


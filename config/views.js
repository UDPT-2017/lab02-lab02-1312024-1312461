var path = require('path');

module.exports = function(app){
  app.set('views', path.resolve('./app/views'));
  app.set('view engine', 'pug');
};

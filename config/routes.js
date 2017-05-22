//controller
var controllers = require('../app/controllers');

//Routes
module.exports = function(app){
  app.get('/', controllers.home.index);
  app.get('/home', controllers.home.index);
  app.get('/messages', controllers.messages.index);
  app.get('/users', controllers.users.index);
  app.get('/about', controllers.about.index);
  app.get('/signup', controllers.signup.index);
  app.get('/login', controllers.login.index);
};

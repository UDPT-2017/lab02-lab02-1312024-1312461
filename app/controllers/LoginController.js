var loginController = {
  index: function(req, res){
    res.render('login',
    {
      title: 'login page',
      message: '',
    });
  }
};

module.exports = loginController;

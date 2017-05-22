var signupController = {
  index: function(req, res){
    res.render('signup',
    {
      title: 'signup page',
      message: '',
    });
  }
};

module.exports = signupController;

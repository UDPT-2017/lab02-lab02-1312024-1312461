var usersController = {
  index: function(req, res){
    res.render('users',
    {
      title: 'users page',
      message: '',
    });
  }
};

module.exports = usersController;

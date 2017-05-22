var homeController = {
  index: function(req, res){
    res.render('index',
    {
      title: 'home page',
      message: '',
    });
  }
};

module.exports = homeController;

var aboutController = {
  index: function(req, res){
    res.render('about',
    {
      title: 'about page',
      message: '',
    });
  }
};

module.exports = aboutController;

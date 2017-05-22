var messagesController = {
  index: function(req, res){
    res.render('messages',
    {
      title: 'messages page',
      message: '',
    });
  }
};

module.exports = messagesController;

var express = require("express");
var app = express();

require('./config')(app);
//start server
app.listen(process.env.PORT || 8080, function(){
      console.log('Example app listening on port 8080!');
});

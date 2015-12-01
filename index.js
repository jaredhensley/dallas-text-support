var express = require('express'),
  port = 9001,
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  controller = require('./server-assets/controller');

app.use(cors(), bodyParser.json(), express.static(__dirname + '/public'));

app.post('/api/reply', controller.sendReply);

app.listen(port, function() {
  console.log('listening on port:', port);
});

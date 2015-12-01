var Firebase = require('firebase'),
  acctSid = 'AC1afc9f309f5920e44ab887af6b56a5dc',
  authToken = '4eccf64cb87fe21c5fd278e0fcc96342',
  twilio = require('twilio')(acctSid, authToken);

module.exports = {
  sendReply: function(req, res) {
    var messagesRef = new Firebase('https://text-support2.firebaseio.com/numbers/' + req.body.number);
    var newMessageRef = messagesRef.push();

    // Note that these functions don't return a promise, and require a callback
    // since they are asynchronous. These nested callbacks are starting to turn
    // into callback hell, and promises help prevent this mess (if the promises are used correctly).
    twilio.messages.create({
      body: req.body.message,
      to: req.body.number,
      from: '+12082617237',
    }, function(err, message) {
      if (err) return res.status(500).json(err);
      newMessageRef.set({
        body: req.body.message,
        date: (new Date()).toISOString(),
        from: '+12082617237',
      }, function(error) {
        if (error) return res.status(500).json(error);
        return res.json(message);
      });
    });
  },
};

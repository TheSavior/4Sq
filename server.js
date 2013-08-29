var express = require('express');
var app = express();

var config = {
  'secrets' : {
    'clientId' : 'QNBMB0TFZHJOXL2KWXA0LQ5TGLEPMRGCIUIJ32VMG3EKHYGA',
    'clientSecret' : 'R2RK5ONNUXIUOXSW051MV1NYVZZPOS3JOHAV0JWUUQQYFKWR',
    'redirectUrl' : 'http://localhost:3000/callback'
  }
};

var foursquare = require('node-foursquare')(config);

app.use(express.static(__dirname + "/client/build"));
app.use(app.router);


app.get('/login', function(req, res) {
  res.writeHead(303, { 'location': foursquare.getAuthClientRedirectUrl() });
  res.end();
});


app.get('/callback', function (req, res) {
  foursquare.getAccessToken({
    code: req.query.code
  }, function (error, accessToken) {
    if(error) {
      res.send('An error was thrown: ' + error.message);
    }
    else {
      res.cookie('accessToken', accessToken, { maxAge: 900000, httpOnly: false});

      res.redirect('/#/map');
      //console.log(accessToken);
      //foursquare.Checkins.getRecentCheckins({}, accessToken, checkinCallback);
      // Save the accessToken and redirect.
    }
  });
});

function checkinCallback(error, results) {
  console.log(results);
}


app.listen(3000);
console.log('Listening on port 3000');
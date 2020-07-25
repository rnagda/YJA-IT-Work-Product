var express = require('express');
var Response = require('./Response');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(session({ 
    secret: 'secret', 
    saveUninitialized: true, 
    resave: false, 
    unset: 'destroy' 
}));

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.render('signup');
});

app.get('/edit', function (req, res) {
  res.render('fetch');
});

app.get('/done', function (req, res) {
  res.render('done');
});

app.post('/', function(req, res) {
  var dateFormat = require('dateformat');
  var d = new Date(req.body.birthday_year, req.body.birthday_month - 1, req.body.birthday);
  var date = dateFormat(d, "mmmm dd, yyyy");
  var address = req.body.address + " " + req.body.address_two;
  Response.addResponse(req.body.first_name, req.body.middle_name, req.body.last_name, date, req.body.phone_number, req.body.email, address, 
    req.body.city, req.body.state, req.body.zip_code, req.body.jain_center, req.body.dietary_preferences, req.body.special_needs, function (err) {
    if(err) {
      res.redirect('/');
    } else {
      res.redirect('/done');
    }
  });
});

app.post('/edit', function(req, res) {
  if (req.body.old_email == null) {
    Response.fetchResponse(req.body.email, function (user) {
      if(user == null) {
        res.redirect('/');
      } else {
        res.render('edit', {user: user});
      }  
    });
  } else {
    Response.deleteResponse(req.body.old_email, function (user) {
      var dateFormat = require('dateformat');
      var d = new Date(req.body.birthday_year, req.body.birthday_month - 1, req.body.birthday);
      var date = dateFormat(d, "mmmm dd, yyyy");
      var address = req.body.address + " " + req.body.address_two;
      Response.addResponse(req.body.first_name, req.body.middle_name, req.body.last_name, date, req.body.phone_number, req.body.email, address, 
        req.body.city, req.body.state, req.body.zip_code, req.body.jain_center, req.body.dietary_preferences, req.body.special_needs, function (err) {
        if(err) {
          console.log(err);
          res.redirect('/');
        } else {
          res.redirect('/done');
        }
      });
    });
  }
});

app.get('/*', function(req, res) {
  res.redirect('/');
})

app.listen(process.env.PORT || 3000);
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const session = require('express-session');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 4000;

app.set('view engine', 'ejs'); //express 서버에서 jsp처럼 쓰는 ejs파일을 뷰 엔진으로 설정
app.set('views', path.join(__dirname, 'views'));

app.use(
  session({ secret: 'MySecret', resave: false, saveUninitialized: true })
);

const TodoTask = require('./models/todoTask');

app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/main'));
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

app.get('/todo', function (req, res) {
  res.render('TodoTasks', {
    todoTasks: res.TodoTask,
    user: res.user,
  });
});

mongoose.connect(
  process.env.MONGO_KEY,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      console.error('mongoDB Connection Error!', err);
    }
    console.log('mongoDB Connected!');

    // Server Open
    app.listen(port, function () {
      console.log(`Success http://localhost:${port}`);
    });
  }
);

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Todo = require('./models/list');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('src'));

const mongoose = require('mongoose');

mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((e) => console.log('error: ', e));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src', 'index.html'));
});

app.listen(process.env.port, () => {
  console.log(`Example app listening at http://localhost:${process.env.port}`);
});

app.post('/add', (req, res) => {
  console.log(req.body);
  const list = new Todo(req.body);

  console.log(list);
  list.save((err, info) => {
    if (err) return res.json({ success: false, err });

    return res.status(200).json({
      success: true,
    });
  });
});

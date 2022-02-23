const express = require('express');
const app = express();
const router = express.Router();

// Todo Router
const TodoRouter = require('./todo');

router.use('/todo', TodoRouter); // http://localhost:3000/todo 로 라우팅

module.exports = router;

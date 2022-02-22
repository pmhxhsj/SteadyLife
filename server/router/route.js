const express = require('express');
const app = express();
const router = express.Router();

// Todo Router
const TodoRouter = require('./main');

// Refactoring
router.use('/main', TodoRouter); // http://localhost:3000/main 로 라우팅

module.exports = router;

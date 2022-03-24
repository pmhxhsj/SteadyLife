const express = require('express');
const app = express();
const router = express.Router();

const controller = require('../controllers/todo');

router.get('/', controller.get);

router.get('/getDate', controller.getDate);

router.get('/myPage', controller.myPage);

router.post('/write', controller.write);

router.get('/edit/:id', controller.edit);

router.post('/update/:id', controller.update);

router.get('/remove/:id', controller.remove);

module.exports = router;

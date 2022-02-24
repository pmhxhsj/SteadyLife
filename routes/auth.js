const express = require('express');
const router = express.Router();
const passport = require('../config/passport.js');

router.get('/login', function (req, res) {
  res.render('auth/login');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (req, res) => {
    res.redirect('/todo');
  }
);

module.exports = router;

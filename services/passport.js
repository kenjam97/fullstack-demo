const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('🚀 ~ file: index.js ~ line 16 ~ done', done);
      console.log('🚀 ~ file: index.js ~ line 16 ~ profile', profile);
      console.log('🚀 ~ file: index.js ~ line 16 ~ refreshToken', refreshToken);
      console.log('🚀 ~ file: index.js ~ line 16 ~ accessToken', accessToken);
    },
  ),
);

import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import keys from './Keys.js';
import User from '../models/signUp.js';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


 const passportSetup = passport.use(
    new GoogleStrategy.Strategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                userData = { ...profile.emails[0].value };
                done(null, currentUser);
                // do something
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    email: profile.emails[0].value,
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    userData = { ...profile.emails[0].value };
                    done(null, newUser);
                    // do something
                });
            }
        });
    })
);

export default passportSetup;
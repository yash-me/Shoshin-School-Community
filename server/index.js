import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import keys from './config/Keys.js';
import cookieSession from 'cookie-session';
import session from 'express-session';
import passport from 'passport';
import apiRoutes from "./routes/apiRoutes.js";
import authRoutes from './routes/authRoutes.js';
import GoogleStrategy from 'passport-google-oauth20';
import User from './models/signUp.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors({origin: "https://vigorous-volhard-d5c01e.netlify.app", credentials: true}));
app.set("trust proxy", 1);

// Session
// app.use(cookieSession({
//     maxAge: 60*60*1000,
//     keys:[keys.session.cookieKey]
// }));
app.use(
session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
    sameSite: "none",
    secure: true,
    maxAge: 1000 * 60 * 60 // One hr
    }
}))




//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api", apiRoutes);
app.use('/auth', authRoutes);

app.get('/', (req,res)=>{
    res.send("Hello welcome to Shoshin Community")
});


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


passport.use( new GoogleStrategy.Strategy({
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
                    done(null, newUser);
                    // do something
                });
            }
        });
    })
);


// production

if (process.env.NODE_ENV === "production") {
    app.use(express.static("app/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "app", "build", "index.html"));
    });
}



//const CONNECTION_URL = keys.mongodb.dbURI;
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
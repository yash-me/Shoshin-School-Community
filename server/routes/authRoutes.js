import express from 'express';
import passport from 'passport';

const router = express.Router();

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
}));

router.get('/profile', (req, res) => {
    // res.send('You are logged in, this is your profile'+req.user);

    

    if(req.user){
        res.send(req.user);
        console.log("Actual user:",req.user);
    }
    
    else{
    res.send({email:'none'});
    }
    
});

//logout
router.get('/logout', (req, res) => {

    req.logout();
    res.redirect("https://vigorous-volhard-d5c01e.netlify.app");
    
});

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: 'https://vigorous-volhard-d5c01e.netlify.app', session: true }), (req, res) => {
    // res.send(req.user);
    res.redirect('https://vigorous-volhard-d5c01e.netlify.app');
    // res.redirect('/forum');
});

export default router; 
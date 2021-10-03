const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const KEYS = require('./keys')


// set cookie****** base on this user
passport.serializeUser((user, done) => {

    let sessionUser = {
        _id: user.googleID,
        accessToken: user.accesstoken,
        name: user.name,
        pic_url: user.pic_url,
        email: user.email
    }

    done(null, sessionUser)
})

// get cookie** & get relevent session data from google **
passport.deserializeUser((sessionUser, done) => {

    done(null, sessionUser) // now can ***access request.user
})


passport.use(
    // google login *************
    new GoogleStrategy(
        // google keys***************

    )
)
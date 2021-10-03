const { Router } = require('express')
const passport = require('passport')

// init router for auth
let router = Router()

router.get('/login', function (req, res) {

    if (req.user) res.redirect('/dashboard') // if auth
    else res.redirect('/auth/login/google') // if not auth

})

// login redirect function
router.get('/login/google', passport.authenticate("google", {
    scope: ['profile', "https://www.googleapis.com/auth/drive.file", "email"]
}))

const { Router } = require('express')
const passport = require('passport')
const { google } = require('googleapis')
const KEYS = require('../configs/keys')


const router = Router()
router.get('/', function (req, res) {
    res.render('Main.html', { 'title': 'Home' })
})

router.get('/dashboard', function (req, res) {

    let parseData = {
        title: 'File Uploader',
        googleid: req.user._id,
        name: req.user.name,
        avatar: req.user.pic_url,
        email: req.user.email
    }
    // redirect with google drive response will be
    if (req.query.file !== undefined) {

        // successfully upload the file
        if (req.query.file == "upload") parseData.file = "uploaded"
        else if (req.query.file == "notupload") parseData.file = "notuploaded"
    }

})

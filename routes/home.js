const { Router } = require('express')
const passport = require('passport')
const { google } = require('googleapis')
const KEYS = require('../configs/keys')


const router = Router()
router.get('/', function (req, res) {
    res.render('Main.html', { 'title': 'Home' })
})

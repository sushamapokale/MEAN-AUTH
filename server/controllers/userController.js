const express = require('express');
const jwt = require("jsonwebtoken")
require('../db')
const User = require('../modals/user');


const router = express.Router()


function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.send("unauthorized request")
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.send("unauthorized request")
    }
    let payload = jwt.verify(token, 'secretkey')
    if (!payload){
        return res.send("unauthorized request")
    }
   req.userId=payload.subject
   next()

}


router.get('/events', (req, res) => {
    let events = [
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        }, {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        }
    ]
    res.send(events)
})


//first token is verified then code in this api gets  executed

router.get('/special', verifyToken, (req, res) => {
    let events = [
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        }, {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        },
        {
            "title": "Title",
            "description": "Description",
            "view": "View Detais"
        }
    ]
    res.send(events)
})

router.post('/login', (req, res) => {
    // console.log(req.body.username)
    User.findOne({ username: req.body.username }, (err, doc) => {
        if (err)
            res.send(err)
        else {
            if (!doc)
                res.send({ "msg": "invalid user" })
            else {
                if (doc.password == req.body.password) {
                    let payload = { subject: req.body._id }
                    let token = jwt.sign(payload, 'secretkey');
                    res.status(200).send({ "token": token })
                }
                else {
                    res.send({ "msg": "invalid password" })
                }
            }
        }
    })
})


router.post('/register', (req, res) => {
    //console.log("req.body")
    User.collection.insertOne(req.body, (err, response) => {
        //console.log(err)
        if (err)
            res.send({ "err": err })
        else {
            let payload = { subject: req.body._id }
            let token = jwt.sign(payload, 'secretkey');
            res.status(200).send({ "token": token })
            // res.send({'msg':'data inserted'})

        }
    })
})

module.exports = router
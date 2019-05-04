const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const session = require('express-session')
const passport = require("passport")

const app = express()

//importing credentials
const { mongoDBUrl } = require("./credentials")
mongoose.connect(
    mongoDBUrl,
    { useNewUrlParser: true }
).then(res => console.log("connected to db")).catch(er => console.log(er))

//importing routes
const signup = require("./routes/signup")
const login = require("./routes/login")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//allow https
app.set("trust proxy", 1)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))


//exteblishing routes
app.use('/signup', signup)
app.use("/login", login)

app.use(passport.initialize())
app.use(passport.session())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Working at", PORT))
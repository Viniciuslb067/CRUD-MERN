const express = require('express')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const cors = require('cors')

mongoose.set('useFindAndModify', false);

const app = express()

app.use(cors())
app.use(express.json())

const db = require('./config/connection').MongoURI
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conexão bem sucedida!'))
.catch(err => console.log(err))

app.use(express.urlencoded({ extended: false }))

app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}))

app.use(flash())

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
})

app.use('/', require('./routes/index'))
app.use('/users' , require('./routes/users'))

app.listen(3333, () => {
  console.log('Servidor rodando!')
})
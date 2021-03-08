const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  level: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

userSchema.pre('save', function(next){
  if(this.isModified('password')){
    return next()
  }
  this.password = bcrypt.hashSync(this.password,10)
})

userSchema.methods.isCorrectPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, same){
    if(err){
      callback(err)
    } else {
      callback(err, same)
    }
  })
}

const User = mongoose.model('User', userSchema)
module.exports = User
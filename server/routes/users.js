const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../models/User')
const secret = 'secret'

router.get('/editar/:_id', async (req, res) => {
  const {_id} = req.params
  const user = await User.findOne({_id})
  res.json(user)
})

router.post('/register', async (req, res) => {
  const {name, email, password, password2} = req.body
  var defaultName = /[^a-zà-ú]/gi;
  var checkName = name.match(defaultName)

  if(!name || !email || !password || !password2) {
    return res.status(200).json({status:2, error: "Preencha todos os campos!"})
  }

  if(name.length <= 3) {
    return res.status(200).json({status:2, error: "O nome tem que possuir +3 caracteres "})
  }

  if(checkName) {
    return res.status(200).json({status:2, error: "O nome é inválido!"})
  }

  if(password !== password2) {
    return res.status(200).json({status:2, error: "As senhas não coincidem!"});
  }

  if(password.length < 4){
    return res.status(200).json({status:2, error: "A senha tem que possuir +4 caracteres"});
  }

  let user = await User.findOne({email})
  const salt = await bcrypt.genSaltSync(10)

  if(!user){
    const newUser = new User({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
      level: "Sem nível"
    })
    await newUser.save()
    return res.status(200).json({status:1, success: "Usuário cadastrado com sucesso!"})
  } else {
    return res.status(200).json({status:2, error: "Usuario já cadastrado!"});
  }

})

router.put('/editar', async (req, res) => {
  const {_id,name, level} = req.body
  
  const data = {name, level}

  if(name.length <= 3) {
    return res.status(200).json({status:2, error: "O nome tem que possuir +3 caracteres "})
  } else {
    await User.findByIdAndUpdate({_id},data, {new:true})

    return res.status(200).json({status:1, success: "Usuário atualizado com sucesso!"})
  }

})

router.post('/login', (req, res, next) => {
  const {email, password, level} = req.body
  User.findOne({email}, function(err, user){
    if(err) {
      console.log(err)
    } else if(!user){
      if(!email || !password) {
        res.status(200).json({status:2, error: "Preencha todos os campos!"})
      } else
        res.status(200).json({status:2, error: "Email não cadastrado!"})
    } else {
      user.isCorrectPassword(password, async function (err, same) {
        if(err) {
          res.status(200).json({error: "Erro no servidor!" })
        } else if(!same){
          res.status(200).json({status:2, error: "Senha incorreta!"})
        } else {
          const payload = {email}
          const token = jwt.sign(payload, secret, {
            expiresIn: '24h'
          })
          res.cookie('token', token, {httpOnly: true})
          res.status(200).json({status:1, auth:true, token: token, id_user: user._id, user_name: user.name, user_type: user.level})
        }
      })
    }
  })
})

router.get('/login/check', (req, res) => {
  const token = req.query.token
  if(!token){
      res.json({status:401,msg:'Não autorizado: Token inexistente!'});
  }else{
      jwt.verify(token, secret, function(err, decoded){
          if(err){
              res.json({status:401,msg:'Não autorizado: Token inválido!'});
          }else{
              res.json({status:200})
          }
      })
  }
})

router.delete('/delete/:_id', async (req, res) => {
  const {_id} = req.params
  const user = await User.findByIdAndDelete({_id})
})

router.get('/logout', (req,res) => {
  const token = req.headers.token
  if(token){
      res.cookie('token',null,{httpOnly:true});
  }else{
      res.status(401).send("Logout não autorizado!")
  }
  res.send("Sessão finalizada com sucesso!");
})

module.exports = router 
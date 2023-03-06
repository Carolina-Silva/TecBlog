const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) =>{
  res.json({
    titulo: 'Post numero 1',
    conteudo: 'Uma mensagem interessante para meu Blog',
    autor: 'Carolina Silva'
  })
})

module.exports = router
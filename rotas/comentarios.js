const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) =>{
  res.json({
    conteudo: 'Um comentario interessante sobre o post',
    autor: 'desconhecido'
  })
})

module.exports = router
const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




router.get('/celebrity', (req, res, next) => {
    Celebrity.find().then(data => {
    res.render('celebrity', {data});
  })
  .catch(error => {
    console.log(error)
    res.render('error');
  })
  
});


router.get('/celebrity/:id', (req, res, next) => {
  let id = req.params.id
  console.log(id)
  Celebrity.findById(id).then(data => {
    console.log(data)
    res.render('celebrities/show', {data});
  })
  .catch(err => {
    next()
    console.log(err)
  })
})





router.get('/movie', (req, res, next) => {
  res.render('movie');
});

module.exports = router;

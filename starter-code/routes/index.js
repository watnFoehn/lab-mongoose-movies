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


router.get('/celebrity/new', (req, res, next) => {
  res.render('celebrities/new')
})




router.post('/celebrity', (req, res, next) => {
  console.log(req.body.name)
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  .then(celebrity => {
    res.redirect(`/celebrity/${celebrity._id}`)
  })
})



router.post('/celebrity/:id/delete', (req, res, next) => {
  console.log(req.params.id)
  Celebrity.findByIdAndRemove(req.params.id).then(
    celebrity => {
      res.redirect('/celebrity')
    }
  )
})


router.get('/movie', (req, res, next) => {
  res.render('movie');
});

module.exports = router;

const express = require('express');
const summaries = require('../sumary.json');
const users = require('../users.json');
const router = express.Router();
const fs = require('fs');


router.get('/summary', (req, res) => {

  const {email} = req.query;
  const {title} = req.query;

  if (!title || !email) {
    return res.status(200).send({ message: 'please, insert email and title'});
  }

  const summary = summaries.filter((summary) => (summary.email == email && summary.title == title));
 
  if (summary.length > 0) {
    res.status(200).send(summary);
  } else {
    res.status(500).send({error: 'summary not found'});
  }
  
} );

router.get('/user', (req, res) => {

  const {email} = req.query;

  if (!email) {
    return res.status(200).send({ message: 'please, insert email'});
  }

  const user = users.filter((user) => (user.email == email));
 
  if (user.length > 0) {
    return res.status(200).send(user);
  } else {
    return res.status(200).send('Usuario nao achado');
  }

} );


router.post('/summary', (req, res) => {

  summaries.push(req.body);
  
  fs.writeFile('sumary.json', JSON.stringify(summaries), err => {
    if (err) throw err; 
  });

  res.status(201).send('Done saving new summary');

    
});

router.post('/createuser', (req, res) => {

  users.push(req.body);
  
  fs.writeFile('users.json', JSON.stringify(users), err => {
    if (err) throw err; 
  });

  res.status(201).send('Done saving new user');

    
});

module.exports = router;
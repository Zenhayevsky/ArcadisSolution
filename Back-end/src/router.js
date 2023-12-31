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

router.get('/users', (req, res) => {
 
  if (users.length > 0) {
    return res.status(200).send(users);
  } else {
    return res.status(500).send('No users on database');
  }

} );

router.get('/user', (req, res) => {

  const {email} = req.query;

  if (!email) {
    return res.status(500).send({ message: 'please, insert email'});
  }

  const user = users.filter((user) => (user.email == email));
 
  if (user.length > 0) {
    return res.status(200).send(user);
  } else {
    return res.status(200).send({ message: 'This user is not in database' });
  }

} );


router.post('/summary', (req, res) => {

  summaries.push(req.body);
  
  fs.writeFile('sumary.json', JSON.stringify(summaries), err => {
    if (err) throw err; 
  });

  res.status(201).send('Done saving new summary');

    
});

router.post('/createUser', (req, res) => {

  const NoDataValidation = req.body.email == '' || req.body.name == '' || req.body.ocupation == '' || req.body == null;
  
  if(NoDataValidation) {
    return res.status(500).send({ message: 'please, insert your personal data'});
  }

  users.push(req.body);
  
  fs.writeFile('users.json', JSON.stringify(users), err => {
    if (err) throw err; 
  });

  res.status(201).send('Done saving new user');

    
});

module.exports = router;
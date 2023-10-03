const express = require('express');
const summaries = require('./summary.json');
const router = express.Router();

router.get('/summary', (req, res) => {

  const {email} = req.query;
  const {title} = req.query;

  console.log(email);
  console.log(title);

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

router.post('/summary', (req, res) => {
  res.send('app POST');
});

module.exports = router;
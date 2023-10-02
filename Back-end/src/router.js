const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('Ola, Jesus'));
router.post('/post', (req, res) => {
  res.send('app POST');
});

module.exports = router;
const express  = require('express')

const app = express();
const PORT = 3001;

app.post('/post', (req, res) => {
  res.send("app POST")
})

app.listen(PORT, () => {
  console.log(`app onlne na porta 3001 ${PORT}`)
})
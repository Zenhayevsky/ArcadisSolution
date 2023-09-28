const axios = require('axios');

const apiKey = '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'
const apiUrl = 'https://api.openai.com/v1/models'

const prompt = 'Qual a taxonomia do gato domestico';

axios.get(apiUrl,{
  headers: {
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${apiKey}`
  }
})
.then(response => {
  console.log(response.data.data.map( i => i.id ))
})
.catch(error => console.log(error));
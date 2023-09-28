
const axios = require('axios');

const apiKey = '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'
const apiUrl = 'https://api.openai.com/v1/completions'

const prompt = 'Qual a taxonomia de baleia';

// gpt-3.5-turbo
// text-davinci-003

axios.post(apiUrl, {
  model: 'text-davinci-003',
  prompt,
  temperature: 0.5,
  max_tokens: 4000
}, {
  headers: {
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${apiKey}`
  }
})
.then(response => {
  console.log(response.data.choices[0].text)
})
.catch(error => console.log(error));
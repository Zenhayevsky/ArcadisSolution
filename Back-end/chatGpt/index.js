
export const callChatGPT = (animal, tipeprompt) => {
  
  const axios = require('axios');

  const apiKey = ''
  const apiUrl = 'https://api.openai.com/v1/completions'

  let prompt = '';

  switch (tipeprompt) {
    case 1:
      prompt = `What is the taxonomy of ${animal}`;
      break;
    case 2:
      prompt = `What are the ecological caracteristcs of ${animal}`;
      break;
    case 3:
      prompt = `What is the threat level of ${animal}`;
      break;
    default:
      console.log(`Sorry, we are out of ${tipeprompt}.`);
  }

  axios.post(apiUrl, {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.7,
    max_tokens: 4000
  }, {
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${apiKey}`
    }
  })
  .then(response => {
    const jsonresponse = response.data.choices[0].text;
    localStorage.setItem("respostaChatGPT", jsonresponse);
    console.log(jsonresponse);
  })
  .catch(error => console.log(error));
}
/* eslint-disable no-undef */
import * as apikey from '../secrets';

export const callChatGPT = async (animal, tipeprompt) => {
  
  const axios = require('axios');

  const apiKey = apikey.API_KEY;
  const apiUrl = apikey.URL_API;

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

  const response = await axios.post(apiUrl, {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.7,
    max_tokens: 4000
  }, {
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${apiKey}`
    }
  });

  return response.data.choices[0].text;

  // .then(response => {
  //   return response.data.choices[0].text;
  // })
  //   .catch(error => console.log(error));
    
};
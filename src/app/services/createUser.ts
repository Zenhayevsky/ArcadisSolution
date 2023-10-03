import { default as axios } from 'axios';
import * as URL_API from '../../../secrets';

export async function createUser() {
  try {
    const { body: response } = await axios.post<any, any>(
      `${URL_API.URL_API}/createuser`,
      {
        // ...payload,
        'email': 'oie@gmail.com',
        'name': 'oie',
        'ocupation': 'oie'
      }
    );

    if (!response) return 'No post!';

    return response;
  } catch (error) {
    console.log(error);
    return 'OFFLINE API';
  }
}

import { default as axios } from 'axios';
import * as URL_API from '../../../secrets';

interface payloadProps {
  name: string;
  email: string;
  ocupation: string;
}

export async function createUser(payload: payloadProps) {
  try {
    const { body: response } = await axios.post<any, any>(
      `${URL_API.URL_API}/createuser`,
      payload
    );

    if (!response) return 'No post!';

    return response;
  } catch (error) {
    return 'OFFLINE API';
  }
}

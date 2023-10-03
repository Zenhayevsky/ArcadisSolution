import { default as axios } from 'axios';
import * as URL_API from '../../../secrets';

export const getUser = async (email: string) => {
  const url = `${URL_API.URL_API}/user?email=${email}`;
  try {
    const response = await axios.get(
      url
    );
    
    return response.data;

  } catch (error) 
  {
    console.log(error);
    return error;
  }
};

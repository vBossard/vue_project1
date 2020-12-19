import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `https://fakerapi.it/api/v1/`,
    headers: {
      //Authorization: 'Bearer {token}'
    }
  })
import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `https://fakerapi.it/api/v1/`,
    timeout: 1000,
    headers: {
      //Authorization: 'Bearer {token}'
    }
  })
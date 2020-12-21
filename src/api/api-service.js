import {HTTP} from './http-common';

export default {
  getProducts(path) {
    console.log(HTTP)
    console.log("Le path", path)
    return HTTP.get(path);
  },



  get(endpoint, options) {
    return HTTP.get(endpoint,options);
  }
}

import {HTTP} from './http-common';

export default {
  getProducts(path) {
    HTTP.get(path)
    .then(response => {
        console.log(response.data.data)
        return response.data.data;
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

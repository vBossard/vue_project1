import {HTTP} from './http-common';

export default {
  getProducts() {
    HTTP.get(`products?_quantity=1`)
    .then(response => {
        console.log(response.data.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

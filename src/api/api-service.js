import {HTTP} from './http-common';
class Service {

  constructor() {
    HTTP.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = HTTP;
  }

  handleSuccess(response) {
    return response;
  }
  /**
   * Catch axios error
   * @param {*} error 
   */
  handleError = (error) => {
    console.log("L'erreur dans le service :",  error)
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, '/')
        break;
      case 404:
        console.log("Erreur 404 :", error.response.status)
        this.redirectTo(document, '/404')
        break;
      default:
        this.redirectTo(document, '/500')
        break;
    }
    return Promise.reject(error)
  }

  redirectTo = (document, path) => {
    document.location = path
  }
  
  get(path,options, callback) {
    let params = {
      params : options,
    };
    return this.service.get(path,params).then(
      (response) => {
        callback(response.data);
      }
    ).catch(error => {
      console.log(error.response)
    });
  }

  patch(path, payload, callback) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => callback(response.status, response.data));
  }

  post(path, payload, callback) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => callback(response.status, response.data));
  }
}

export default new Service;

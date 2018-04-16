import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://graph.facebook.com/v2.12';
  //token: string = '&access_token=232599437121434|RGPVVCGWuGiicYSnQi6lzTOaNqw';
  token: string = '&locale=pt_BR&access_token=EAACEdEose0cBAKsJGeZBnXjrU4kQR1jTTUoX4VLGlju74PMQlfiSSrHEvXDa0iUxDlUJA6dZBPjOt46OjS0cHO9zLz1W2qdzwyvcFi2ho3q6YWA9C6BOeZBDW7O3yg4kkeZBZCoaoaLxkpL3bM3qPlZAxXUMRWhMsoWE9Prxvh2aRk7MkkvfqafvNw7tdSaMYZD';

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint + this.token, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}

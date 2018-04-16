import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class PaginasProvider {

  constructor(public api: Api) {
    console.log('Hello PaginasProvider Provider');
  }

  query(pagina, params?: any) {
    return this.api.get(pagina+'?fields=name,picture,cover,about,description,link,phone,location,username,fan_count,app_links,website,category', params);
  }

}

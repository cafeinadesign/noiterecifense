import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class PaginasProvider {

  constructor(public api: Api) {
    console.log('Hello PaginasProvider Provider');
  }

  query(pagina, params?: any) {
    return this.api.get(pagina+'?fields=name,picture,cover,about,description,link,phone,location,username,fan_count,app_links,website&access_token=EAACEdEose0cBANULaIKcPkW5TdYZAeW1PZBAnHjoT4BTUo98fimsHuZBXtxbNXT1LZB1zebpP7gEZBtgvW39MnMBBr7LutGswSIq4ZC9aGxKalhxaQhO3gtLl9cArc1JA0Faun07vIFNmuZCKz774KdY5n73ci2vez6r9AvTwZCS2IeMaCaZA0q691zLMZCi5jMMZA16x39qwyyPgZDZD', params);
  }

}

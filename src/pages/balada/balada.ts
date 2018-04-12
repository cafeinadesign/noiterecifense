import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { PaginasProvider } from '../../providers/paginas/paginas';

@Component({
  selector: 'page-balada',
  templateUrl: 'balada.html'
})
export class BaladaPage {
	perfilPaginas: any[];
	paginas: any;
	items: Observable<any[]>;

  constructor(public navCtrl: NavController, afDB: AngularFireDatabase,
  	public paginasProvider: PaginasProvider) {
  	this.paginas = [];
  	this.perfilPaginas = [];
    const items = afDB.list('paginas').valueChanges();
    items.subscribe((data: any) => {
    	console.log(data);
    	this.paginas = data;
    	this.getPagina(0);
    });
  }

  getPagina(i){
  	if (i < this.paginas.length) {
		let j = i;
		this.paginasProvider.query(this.paginas[j].nome).subscribe(data => {
			// console.log(data);
			this.perfilPaginas.push(data);
			this.getPagina(j+1);
		}, erro => {
			console.log(j);
			console.log(erro);
			this.getPagina(j+1);
		});
  	}
  }
}

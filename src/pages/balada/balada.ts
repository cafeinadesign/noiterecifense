import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { PaginasProvider } from '../../providers/paginas/paginas';

@Component({
  selector: 'page-balada',
  templateUrl: 'balada.html'
})
export class BaladaPage {
  carregando: boolean = true;
	baladas: any[] = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, afDB: AngularFireDatabase,
  	public paginasProvider: PaginasProvider) {

    let loading = this.loadingCtrl.create({
      content: 'Carregando as baladas...'
    });
    loading.present();

    afDB.list('baladas').valueChanges().subscribe((data: any) => {
      loading.dismiss();
      this.baladas = data;
    });

  }
}

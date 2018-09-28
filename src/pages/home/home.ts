import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacturasPage} from '../facturas/facturas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  viewFactura(){
    this.navCtrl.push(FacturasPage);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacturasPage} from '../facturas/facturas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  empacadores = [
    {
      rack: 'Rack 1',
      nombre: 'Jose Beltran',
      facturas: 4
    },
    {
      rack: 'Rack 2',
      nombre: 'Carlos Rodriguez',
      facturas: 5
    },
    {
      rack: 'Rack 3',
      nombre: 'Alberto Casas',
      facturas: 10
    },
    {
      rack: 'Rack 4',
      nombre: 'Mauricio Martinez',
      facturas: 6
    },
    {
      rack: 'Rack 5',
      nombre: 'Camilo Ballesteros',
      facturas: 5
    },
    {
      rack: 'Rack 6',
      nombre: 'Federico Pulido',
      facturas: 7
    }
  ]
  constructor(public navCtrl: NavController) {

  }

  viewFactura(){
    this.navCtrl.push(FacturasPage);
  }

}

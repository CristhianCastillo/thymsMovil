import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-facturas',
  templateUrl: 'facturas.html',
})
export class FacturasPage {

  facturas = [
    {
      numeroFactura: 'FA_0232683',
      fecha: '03/08/2018',
      detalle: [
        {
          referencia: 'Z1.0',
          nombre: 'N1 1-0 NEGRO',
          cantidad: 6
        },
        {
          referencia: 'Z3.0',
          nombre: 'N3 3-0 Castaño',
          cantidad: 2
        },
        {
          referencia: 'Z5.7',
          nombre: 'V2 5-7 BORGOYA',
          cantidad: 2
        }
      ]
    },
    {
      numeroFactura: 'FA_02334933',
      fecha: '03/09/2018',
      detalle: [
        {
          referencia: 'Z1.0',
          nombre: 'N1 1-0 NEGRO',
          cantidad: 6
        },
        {
          referencia: 'Z3.0',
          nombre: 'N3 3-0 ASTAÑO OSCURO',
          cantidad: 2
        },
        {
          referencia: 'Z5.7',
          nombre: 'V2 5-7 BORGOYA',
          cantidad: 2
        }
      ]
    },
    {
      numeroFactura: 'FA_02333333',
      fecha: '03/09/2018',
      detalle: [
        {
          referencia: 'Z1.0',
          nombre: 'N1 1-0 NEGRO',
          cantidad: 6
        },
        {
          referencia: 'Z3.0',
          nombre: 'N3 3-0 ASTAÑO OSCURO',
          cantidad: 2
        },
        {
          referencia: 'Z5.7',
          nombre: 'V2 5-7 BORGOYA',
          cantidad: 2
        }
      ]
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturasPage');
  }

}

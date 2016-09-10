import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  changePageOne(){
  	this.navCtrl.push(ProductPage); // this, objeto global con public
  }

}

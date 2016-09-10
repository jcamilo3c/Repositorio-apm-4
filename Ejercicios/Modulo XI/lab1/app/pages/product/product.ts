import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/*
  Generated class for the ProductPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/product/product.html',
})
export class ProductPage {

  constructor(private navCtrl: NavController) {

  }

  changePageTwo(){
  	this.navCtrl.push(ProfilePage);
  }

}

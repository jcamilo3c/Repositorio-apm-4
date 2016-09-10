import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {

	public object: any;

  constructor(private navCtrl: NavController) {
  	this.object=[
  	{
  		firstname: 'product 1',
  		lastname: 'element',
  		phone: 5000,
  		email: 10
  	},
  	{
  		firstname: 'product 2',
  		lastname: 'element',
  		phone: 3000,
  		email: 10
  	},
  	{
  		firstname: 'product 3',
  		lastname: 'element',
  		phone: 23000,
  		email: 10
  	},
  	{
  		firstname: 'product 4',
  		lastname: 'element',
  		phone: 3000,
  		email: 10
  	}
  	]

  }

}

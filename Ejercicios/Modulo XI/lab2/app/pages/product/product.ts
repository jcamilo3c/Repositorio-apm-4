import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductServices } from '../../providers/product/product';

@Component({
  templateUrl: 'build/pages/product/product.html'
})
export class ProductPage {

  public list;

  constructor(private navCtrl: NavController, private productServices: ProductServices){
  }

  getProduct(){
    this.productServices.getProducts().subscribe(
        list => { this.list = list},
        err => {
          alert(err);
   });
  }

}


    /*this.list =[
    {
      name: 'product 1',
      type: 'element',
      price: 5000,
      quantity: 10
    },
    {
      name: 'product 2',
      type: 'element',
      price: 3000,
      quantity: 10
    },
    {
      name: 'product 3',
      type: 'element',
      price: 23000,
      quantity: 10
    },
    {
      name: 'product 4',
      type: 'element',
      price: 3000,
      quantity: 10
    }
    ]*/

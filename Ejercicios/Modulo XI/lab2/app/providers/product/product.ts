import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";

/*
  Generated class for the Product provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class ProductServices {

  constructor(private http: Http){}

  getProducts(): Observable<Response>{
    return this.http.get('http://138.68.0.83:7070/api/v1/product/list')
    .map(data => {this.extractData(data)})
    .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }

  private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }
}

/*
@Injectable()
export class ProductServices {

  constructor(private http: Http){}

  getProducts(): Observable<Response>{ // programacion reactiva Observable
  	let headers = new Headers({
  		'Content-Type':'application/json',
  		'Authorization': 'Basic rurrur94287594ew948' // cabeceras del servicio
  	});
  	let options = RequestOptions({headers: headers});
  	this.http.get(' http://138.68.0.83:7070/api/v1/product/list', options)
  	.map(this.extractData(data)) // informacion correcta
  	.catch(this.handleError); // informacion incorrecta
  }


  private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }

  private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }
}
*/
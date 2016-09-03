import { Component } from 'angular2/core';

@Component({
    selector: 'tag-index',
    templateUrl: 'src/templates/home.html'
})

export class Product {
    nombre = '';
    tipo = '';
    precio = '';
    cantidad = '';
}
import { Component } from '@angular/core';
import { Hero, Heroes } from './Hero'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives:   [ ProductDetailComponent]
  
})
export class AppComponent {
  products: Hero[] = Heroes;
  title = 'Tour of Heroes';
  selectedProduct?:Hero;
  mgs?:string;

  setSelectProduct(p:Hero) {
    this.selectedProduct = p;
  } 
}
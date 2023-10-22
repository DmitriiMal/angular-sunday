import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Iproducts[] = [];
  constructor() {}

  addToCart(obj: Iproducts) {
    this.cart.push(obj);
    console.table(this.cart);
    alert('Product addet to the cart');
  }
}

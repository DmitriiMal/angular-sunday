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

  getCart() {
    return this.cart;
  }

  calcSum() {
    let sum: number = 0;

    this.cart.forEach((prod) => {
      sum += prod.price;
    });
    return sum;
  }

  setDiscount(sum: number, discount: number) {
    if (sum > 40) {
      discount = 15;
    } else {
      discount = 0;
    }

    return discount;
  }

  calcTotal(sum: number, discount: number, service: number) {
    let total: number = 0;
    if (sum == 0) {
      total = 0;
    } else if (discount == 0) {
      total = sum + service;
    } else {
      total = sum - (sum * discount) / 100 + service;
    }
    return total;
  }
}

import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart: Iproducts[] = [];
  sum: number = 0;
  service: number = 3.1;
  discount: number = 0;
  total: number = 0;

  constructor(private CS: CartService) {}
  ngOnInit(): void {
    this.cart = this.CS.getCart();
    this.sum = +this.CS.calcSum().toFixed(2);
    this.discount = this.CS.setDiscount(this.sum, this.discount);
    this.total = +this.CS.calcTotal(
      this.sum,
      this.discount,
      this.service
    ).toFixed(2);
  }

  removeFromCard(index: number) {
    this.cart.splice(index, 1);
    this.sum = +this.CS.calcSum().toFixed(2);
    this.discount = this.CS.setDiscount(this.sum, this.discount);
    this.total = +this.CS.calcTotal(
      this.sum,
      this.discount,
      this.service
    ).toFixed(2);
  }
}

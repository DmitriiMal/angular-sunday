import { Component } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent {
  products: Iproducts[] = products;

  constructor(private CS: CartService) {}

  addToCart(obj: Iproducts) {
    this.CS.addToCart(obj);
  }
}

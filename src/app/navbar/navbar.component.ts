import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Iproducts } from '../Iproducts';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cart: Iproducts[] = [];

  constructor(private CS: CartService) {}

  ngOnInit(): void {
    this.cart = this.CS.getCart();
  }
}

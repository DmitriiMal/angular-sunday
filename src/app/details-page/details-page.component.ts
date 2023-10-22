import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  product: Iproducts = {} as Iproducts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: CartService) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.product = products[this.id];
    });
  }

  addToCart() {
    this.CS.addToCart(this.product);
  }
}

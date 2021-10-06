import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/services/cart.service';
import { DataService } from '../core/services/data.service';
import { productI } from '../shared/interfaces';

@Component({
  selector: 'app-products-add',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public productList: productI[] = [];
  public productsDisplay: productI[] = [];

  constructor(private api: DataService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((a: productI) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  public handleCategory(type: string) {
    this.productsDisplay = this.productList;
    this.productsDisplay = this.productsDisplay.filter((product) => {
      const categories = product.category;
      return categories && categories.includes(type);
    });
  }

  addtocart(item: productI) {
    this.cartService.addToCart(item);
  }
}

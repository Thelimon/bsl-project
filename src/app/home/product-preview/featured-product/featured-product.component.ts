import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { map } from 'rxjs/operators';
import { productI } from 'src/app/shared/interfaces';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent {
  constructor(private dataSvc: DataService, private cartService: CartService) {}
  
  public featuredProducts$ = this.dataSvc.getProduct().pipe(
    map((products) =>
      products.filter(({ category }) => category?.includes('bestseller'))
    ),
    map((products) => products.slice(0, 6))
  );

  public othersProducts$ = this.dataSvc.getProduct().pipe(
    map((products) =>
      products.filter(({ category }) => !category?.includes('bestseller'))
    ),
    map((products) => products.slice(0, 6))
  );

  addtocart(item: productI) {
    this.cartService.addToCart(item);
  }
}

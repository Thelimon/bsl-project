import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { productI } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent implements OnInit, OnDestroy {
  public products: productI[] = [];
  public productsDisplay: productI[] = [];
  private productSubscription: Subscription;

  constructor(private dataSvc: DataService) {
    this.productSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  private getProducts(): void {
    this.productSubscription = this.dataSvc
      .getProduct()
      .subscribe((products: productI[]) => {
        this.products = products;
        this.productsDisplay = products;
      });
  }

  public handleCategory(type: string) {
    this.productsDisplay = this.products;
    this.productsDisplay = this.productsDisplay.filter((product) => {
      const categories = product.category;
      return categories && categories.includes(type);
    });
  }
}

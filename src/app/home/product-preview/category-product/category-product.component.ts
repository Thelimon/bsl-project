import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';
import { productI } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent implements OnInit {
  public products: productI[] = [];
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.dataSvc
      .getProduct()
      .pipe(tap((products: productI[]) => (this.products = products)))
      .subscribe();
  }
}

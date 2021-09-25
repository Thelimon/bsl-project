import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { productI } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
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

import {Component} from '@angular/core';
import {DataService} from 'src/app/core/services/data.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent {

  public featuredProducts$ = this.dataSvc.getProduct()
    .pipe(
      map(products => products.filter(({category}) => category?.includes('bestseller'))),
      map((products) => products.slice(0, 6)),
    );

  public othersProducts$ = this.dataSvc.getProduct()
    .pipe(
      map(products => products.filter(({category}) => !category?.includes('bestseller'))),
      map((products) => products.slice(0, 6)),
    );

  constructor(private dataSvc: DataService) {
  }
}

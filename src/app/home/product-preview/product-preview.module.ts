import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturedProductComponent} from './featured-product/featured-product.component';
import {CategoryProductComponent} from './category-product/category-product.component';

@NgModule({
  declarations: [FeaturedProductComponent, CategoryProductComponent],
  imports: [CommonModule],
  exports: [FeaturedProductComponent, CategoryProductComponent],
})
export class ProductPreviewModule {
}

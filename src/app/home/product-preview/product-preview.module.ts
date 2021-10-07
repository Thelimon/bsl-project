import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturedProductComponent} from './featured-product/featured-product.component';
import {CategoryProductComponent} from './category-product/category-product.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FeaturedProductComponent, CategoryProductComponent],
  imports: [CommonModule, SharedModule],
  exports: [FeaturedProductComponent, CategoryProductComponent],
})
export class ProductPreviewModule {
}

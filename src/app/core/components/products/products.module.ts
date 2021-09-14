import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [FeaturedProductComponent, ProductComponent],
  imports: [CommonModule],
  exports: [FeaturedProductComponent, ProductComponent],
})
export class ProductsModule {}

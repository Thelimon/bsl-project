import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './featured/featured.component';
import { ProductSectionComponent } from './product-section/product-section.component';



@NgModule({
  declarations: [
    FeaturedComponent,
    ProductSectionComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [FeaturedComponent, ProductSectionComponent]
})
export class ProductsModule { }

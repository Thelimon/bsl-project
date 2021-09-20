import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProductsModule } from './components/products/products.module';
import { FeaturedProductComponent } from './components/products/featured-product/featured-product.component';
import { ProductComponent } from './components/products/product/product.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    CarouselComponent,
    NavbarComponent,
    HeaderComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FeaturedProductComponent,
    ProductComponent,
    FormComponent,
  ],
})
export class CoreModule {}

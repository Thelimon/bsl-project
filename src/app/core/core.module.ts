import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProductsModule } from './components/products/products.module';
import { FeaturedComponent } from './components/products/featured/featured.component';
import { ProductSectionComponent } from './components/products/product-section/product-section.component';

@NgModule({
  declarations: [CarouselComponent, NavbarComponent, HeaderComponent],
  imports: [CommonModule, NgbModule, FormsModule, ProductsModule],
  exports: [HeaderComponent, FeaturedComponent, ProductSectionComponent],
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProductsModule } from './components/products/products.module';
import { FeaturedProductComponent } from './components/products/featured-product/featured-product.component';
import { ProductComponent } from './components/products/product/product.component';
import { AboutComponent } from '../auth/pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [CarouselComponent, NavbarComponent, HeaderComponent, AboutComponent,FooterComponent ],
  imports: [CommonModule, NgbModule, FormsModule, ProductsModule],
  exports: [HeaderComponent, FeaturedProductComponent, ProductComponent, AboutComponent,FooterComponent ],
})
export class CoreModule {}

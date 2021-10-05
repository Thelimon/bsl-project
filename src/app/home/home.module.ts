import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home.component';
import { ProductPreviewModule } from './product-preview/product-preview.module';

@NgModule({
  declarations: [HomeComponent, CarouselComponent, ContactFormComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ProductPreviewModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}

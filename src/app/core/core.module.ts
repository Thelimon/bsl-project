import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [CarouselComponent, NavbarComponent, HeaderComponent],
  imports: [CommonModule, NgbModule, FormsModule],
  exports:[HeaderComponent]
})
export class CoreModule {}

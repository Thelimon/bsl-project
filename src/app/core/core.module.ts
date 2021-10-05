import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, NgbModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}

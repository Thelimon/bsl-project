import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, NgbModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {
}

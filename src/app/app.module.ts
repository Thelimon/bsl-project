import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [AppComponent, AboutUsComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

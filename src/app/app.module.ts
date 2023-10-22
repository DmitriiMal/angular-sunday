import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HamePageComponent } from './hame-page/hame-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HamePageComponent,
    AboutPageComponent,
    MenuPageComponent,
    DetailsPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

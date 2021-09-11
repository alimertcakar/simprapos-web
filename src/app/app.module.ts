import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FastFoodOrdersPageComponent } from './fastfood-orders-page/fastfood-orders-page.component';
import { HeaderComponent } from './headerr/header/header.component';
import { IconsComponent } from './icons/icons.component';
import { FastfoodOrdersComponent } from './fastfood-orders/fastfood-orders.component';
import { ProductGroupTabComponent } from './fastfood-orders-page/product-group-tab/product-group-tab.component';
import { AppProductGroupTabContentComponent } from './app-product-group-tab-content/app-product-group-tab-content.component';

@NgModule({
  declarations: [
    FastFoodOrdersPageComponent,
    AppComponent,
    HeaderComponent,
    IconsComponent,
    FastfoodOrdersComponent,
    ProductGroupTabComponent,
    AppProductGroupTabContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

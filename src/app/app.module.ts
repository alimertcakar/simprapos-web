import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinScreenComponent } from './pin-screen/pin-screen.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [PinScreenComponent, AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

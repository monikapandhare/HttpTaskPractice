import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './shared/components/products/products.component';
import { materialModule } from './material/material.module';
import { HomeComponent } from './shared/components/home/home.component';
import { PassengerModule } from './passenger/passenger.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule,
    PassengerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

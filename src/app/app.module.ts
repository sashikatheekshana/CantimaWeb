
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IconsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { DcardComponent } from './Shared/dcard/dcard.component';
import { InstockComponent } from './instock/instock.component';
import { SigninComponent } from './signin/signin.component';
import { CashierComponent } from './cashier/cashier.component';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DcardComponent,
    InstockComponent,
    SigninComponent,
    CashierComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

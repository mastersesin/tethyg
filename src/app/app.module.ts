import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { IntroComponent } from './intro/intro.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailPictureComponent } from './product-detail-picture/product-detail-picture.component';
import { TermComponent } from './term/term.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule}from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    IntroComponent,
    ProductComponent,
    ProductDetailPictureComponent,
    TermComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatInputModule
  ],
  exports : [
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

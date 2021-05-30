import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './modules/main/main.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './modules/main/history/history.component';
import { ProductsComponent } from './modules/main/products/products.component';
import { PricesComponent } from './modules/main/prices/prices.component';

import { HttpClientModule } from '@angular/common/http';
import { ShopModule } from './modules/shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContactComponent,
    HistoryComponent,
    ProductsComponent,
    PricesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

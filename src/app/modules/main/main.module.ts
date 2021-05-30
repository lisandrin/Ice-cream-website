import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryComponent } from './history/history.component';
import { ProductsComponent } from './products/products.component';
import { PricesComponent } from './prices/prices.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    HistoryComponent,
    ProductsComponent,
    PricesComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HistoryComponent,
    ProductsComponent,
    PricesComponent
  ]
})
export class MainPageModule { }

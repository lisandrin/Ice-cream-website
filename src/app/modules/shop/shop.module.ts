import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    RouterModule,
    BrowserModule
  ],
  exports: [
    ListComponent,
    DetailComponent
  ]
})
export class ShopModule {
  
}
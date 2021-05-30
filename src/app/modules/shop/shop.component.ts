import { Component, OnInit } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private list: ListComponent) { }

  ngOnInit(): void {
  }

}
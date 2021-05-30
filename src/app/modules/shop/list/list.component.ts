import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
// import { Product } from 'src/app/user/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productList: any = [];
  // @Input() productItem: Product;

  constructor(private http: ShopService) { }
 
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.getAllProducts().subscribe((products) => {
      this.productList = products;
      console.log(products);
      
    })
    
  }
}


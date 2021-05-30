import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ShopService } from '../../../services/shop.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: Product;
  constructor(private actRoute: ActivatedRoute,
    private userService:ShopService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    const productId = this.actRoute.snapshot.paramMap.get('id');
    this.userService.getById(productId).subscribe(data => this.item = data)
  }
}
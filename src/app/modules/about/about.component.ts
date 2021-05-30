import { Component, OnInit } from '@angular/core';
import { PromotedService } from 'src/app/services/promoted.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  promotedList: any = [];
  constructor(private http: PromotedService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.http.getAllPromoted().subscribe((products) => {
      this.promotedList = products;
      console.log(products);
    })
  }
}

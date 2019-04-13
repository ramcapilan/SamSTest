import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any = [];

  constructor(public rest:RestService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }


}

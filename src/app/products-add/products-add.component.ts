import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { productI } from '../shared/interfaces';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {

  public productList: productI[] = []
  constructor(private api: DataService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res
    })
  }

}

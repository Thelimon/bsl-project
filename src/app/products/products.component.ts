import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/services/cart.service';
import { DataService } from '../core/services/data.service';
import { productI } from '../shared/interfaces';

@Component({
  selector: 'app-products-add',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: productI[] = []
  constructor(private api: DataService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res

      this.productList.forEach((a:productI)=> {
        Object.assign(a,{quantity: 1 , total: a.price});
      })
    })
  }
  addtocart(item: productI){
    this.cartService.addToCart(item)
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productI } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:productI[] = []
  public productList = new BehaviorSubject<any>([])
  constructor() { }
  getProducts(){
    return this.productList.asObservable();  
  }
  setProducts(product: productI[]){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }
  addToCart(product: productI){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:productI){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index, 1)
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}

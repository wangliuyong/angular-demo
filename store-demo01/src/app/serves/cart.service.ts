import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items=[];
  constructor(
    private http: HttpClient
  ){}

  //将产品添加到购物车
  addCart(product:object){
    this.items.push(product)
  }

  getItems(){
    return this.items;
  }

  clearItem(){
    this.items=[]
    console.log('cart clear');
    return this.items
  }

  getShipping(){
    //在线mock数据
    //let shippings=this.http.get('https://easy-mock.com/mock/5d1467a2a47bb650f229a5d3/example/shipping')
    let shippings=this.http.get('/assets/shipping.json')
    // console.log(shippings);
    
    return shippings
  }

}

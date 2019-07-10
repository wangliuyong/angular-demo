import { Component, OnInit } from '@angular/core';
//引入路由原信息模块
import { ActivatedRoute } from '@angular/router';

import { products } from '../../product';
 //购物车服务
import { CartService } from '../../serves/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product;

  constructor(
    //注入到当前组件
    private route:ActivatedRoute,
    private CartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //订阅（subscribe）路由参数并根据其 productId 获取商品信息。
      this.product = products[+params.get('productId')];
    });
    console.log(this.product);
  }


  onAdd(product){
    console.log(this.CartService);
    
    this.CartService.addCart(product)
    console.log(this.CartService.getItems());
    
  }

}

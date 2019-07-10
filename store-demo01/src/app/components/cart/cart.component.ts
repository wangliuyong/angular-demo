import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import {CartService} from '../../serves/cart.service' 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:any;
  checkoutForm:any;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    //在构造函数中初始化数据
    this.cart=this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    console.log(this.cart);
  }

  onSubmit(formData:object){
    console.log('form data: ',formData);
    //购物车数据提交后需要清空
    this.cart=this.cartService.clearItem();
    //表单重置
    this.checkoutForm.reset()
  }

}

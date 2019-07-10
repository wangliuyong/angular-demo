import { Component, OnInit } from '@angular/core';
import {CartService} from '../../serves/cart.service'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippings;

  constructor(
    private CartService: CartService
  ) { 
  }

  ngOnInit() {
    //console.log('this.shippings',this.shippings);
    //请求运费数据
    this.CartService.getShipping().subscribe(res => {
      console.log(res);
      this.shippings=res;
    });
  }

}

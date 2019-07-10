import { Component, OnInit } from '@angular/core';
import { products } from '../../product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products = products;

  constructor() { }

  ngOnInit() {
  }

  share(){
    console.log('share')
  }
  
  toNotify(){
    alert('组件product-alert emit 组件product-list的toNotify()!');
  }

}

import { Component, OnInit } from '@angular/core';
//@Input 装饰器指出其属性值是从组件的父组件（在本例中就是商品列表组件）中传入的。
import { Input } from '@angular/core';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  //该属性从父组件传入
  @Input() product;
  //输出
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

}

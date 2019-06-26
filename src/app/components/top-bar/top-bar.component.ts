import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  //推荐使用
  public name:String="wang";//公有属性，类内外都可以使用


  private age=18;//私有属性，类内使用
  protected hign=20;//保护属性，类内和他的后代类可以使用

  title:String="我是topbar";//指定类型

  public message:any;

  constructor() {
    this.message=''//属性的赋值
   }

  ngOnInit() {
    
  }

}

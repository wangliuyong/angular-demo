import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public name:String="wang";//公有属性，类内外都可以使用


  private age=18;//私有属性，类内使用
  protected hign:number=20;//保护属性，类内和他的后代类可以使用

  title:String="我是topbar";//指定类型

  public html:String="<h2>这是一个HTML</h2>"

  public message:any;

  constructor() {
    this.message=''//属性的赋值
   }

  ngOnInit() {
    
  }

}

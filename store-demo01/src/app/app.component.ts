import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//使用组件名称
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';//定义属性
  constructor(){}//构造函数
}

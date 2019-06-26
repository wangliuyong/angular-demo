/**根模块 如何组装*/

/**浏览器解析模块 */
import { BrowserModule } from '@angular/platform-browser';
/** angular核心模块*/
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
/**根组件 */
import { AppComponent } from './app.component';
//普通组件
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DemoComponent } from './components/demo/demo.component';

/* @NgModule装饰器，接受一个元数据对象，告诉angular如何编译和启动应用*/
@NgModule({
  //配置组件
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    DemoComponent
  ],
  //注入依赖的的其他模块
  imports: [
    BrowserModule,
    RouterModule
  ],
  //配置项目服务，管理数据
  providers: [],
  //启动跟组件
  bootstrap: [AppComponent]
})

//导出跟模块
export class AppModule { }

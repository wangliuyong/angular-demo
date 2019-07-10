/* 根模块 如何组装*/

/* 浏览器解析模块 */
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';//antd-design UI
import { NzButtonModule } from 'ng-zorro-antd/button';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

/* angular核心模块 */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; //表单模块一定要导入否则会报错

//路由模块
import { AppRoutingModule } from './app-routing.module';


/* 根组件 */
import { AppComponent } from './app.component';
//普通组件
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DemoComponent } from './components/demo/demo.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';

/* @NgModule装饰器，接受一个元数据对象，告诉angular如何编译和启动应用*/
@NgModule({
  //配置组件
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    DemoComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  //注入依赖的的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  //配置项目服务，管理数据
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  //启动跟组件
  bootstrap: [AppComponent]
})

//导出跟模块
export class AppModule { }

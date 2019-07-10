import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//引入组件
import { ProductListComponent } from './components/product-list/product-list.component';
import { DemoComponent } from './components/demo/demo.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
 
const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path: 'products/:productId', component: ProductDetailsComponent },
  {path:'cart',component:CartComponent},
  {path:'shipping',component:ShippingComponent},
  {path:'demo',component:DemoComponent},//测试demo组件
  {path:'**',redirectTo:''}//匹配不到路由时，重定向到 ‘/’
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

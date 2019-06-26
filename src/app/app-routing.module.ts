import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'demo',component:DemoComponent},
  {path:'**',redirectTo:''}//匹配不到路由时，重定向到/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

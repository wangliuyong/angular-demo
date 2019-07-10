import { NgModule } from '@angular/core';
import { Routes, RouterModule ,Router} from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { RecommendComponent } from './components/recommend/recommend.component';


const routes: Routes = [
 {
   path:'home',
   component:HomeComponent,
   children:[{
     path:'/stores',
     component:StoreDetailComponent
   }]
  },
 {path:'detail/:productId',component:StoreDetailComponent},
 {path:'recommended',component:RecommendComponent},
 {path:'**',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

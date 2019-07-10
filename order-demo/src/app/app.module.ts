import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClientJsonpModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
//组件
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RecommendComponent } from './components/recommend/recommend.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreDetailComponent,
    TopBarComponent,
    RecommendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

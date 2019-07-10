import { Component, OnInit } from '@angular/core';

import { StoreListService } from "../../services/store-list.service";
import {Respones} from '../../model/respones'
import { Store } from "../../model/respones";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public title='于廊坊粥铺';
  stores:Store[];

  constructor(
    private storeListService: StoreListService
  ) { }

  ngOnInit() {

    this.getStoreList()
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    
    
  }

  //获取商品列表
  public getStoreList(): void{
    this.storeListService.getStores().then((res:Respones)=>{
      this.stores=res.result;
      console.log(this.stores);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Location } from '@angular/common';
import { StoreDetailService } from "../../services/store-detail.service";
import { Store } from "../../model/respones";
import {  Respones} from "../../model/respones";



@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.less']
})
export class StoreDetailComponent implements OnInit {

  public store: Store={
    title:'',
    id:''
  }

  constructor(
    private route: ActivatedRoute,
    private router :Router,
    private storeDetailService: StoreDetailService
  ) { }

  ngOnInit() {
    //获取路由器参数

    this.router.navigateByUrl('')
    console.log(this.route.snapshot.params.productId);

    this.getStore()
  }

  getStore(){
    let id=this.route.snapshot.params.productId;
    let parmas={
      id
    }
    this.storeDetailService.getStore(parmas).then((res:Respones)=>{
      console.log(res.result);
      this.store=res.result[0]
    })
  }

}

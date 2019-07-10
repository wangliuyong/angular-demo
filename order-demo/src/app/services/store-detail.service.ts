import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";



@Injectable({
  providedIn: 'root'
})
export class StoreDetailService {

  constructor(
    private http:HttpService
  ) { }

  getStore(parmas:any){
    return this.http.get('/productcontent',parmas)
  }
}

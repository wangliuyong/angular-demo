import { Injectable } from '@angular/core';

import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class StoreListService {

  constructor(
    private http:HttpService
  ) { }

  public getStores(){
    return this.http.get('/productlist',{})
  }
}

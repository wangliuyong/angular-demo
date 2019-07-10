import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

import { environment } from ".././../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http:HttpClient
  ) { }

  public get(path:string,params:any){

   


    let url=environment.baseUrl+path;

    let dataParams = new HttpParams();
    for (const key in params) {
      if (params[key] === false || params[key]) {
        dataParams = dataParams.set(key, params[key]);
      }
    }

    // 底层http调用
    return this.http.get(url, { params: dataParams })
    // 响应转化为Promise
      .toPromise();

    // return new Promise((resolve,reject)=>{
    //   this.http.get(url).subscribe((res:any)=>{
    //     resolve(res) 
    //   })
    // })
    
  }


  
}

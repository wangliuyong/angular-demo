# angular 各功能应用demo
## 启动项目

进入各demo项目下执行：
```
    cnpm i
    ng serve --open
```  
    
## 常用指令
```
  *ngfor
  *ngIf
  插值表达式 {{}}
  属性绑定 []
  事件绑定 ()
  //数据双向绑定
  [(ngModel)]="hero.name"

```
## app.module各模块含义

<img src="./common-resource/app-module.png">

## 组件


## 路由
### 1.路由配置
app.routing注入；
```ts

import { Routes, RouterModule } from '@angular/router'
import { Observable, of, } from 'rxjs';
import { catchError, map, tap ,switchMap,distinctUntilChanged,debounceTime,combineLatest} from 'rxjs/operators';

```

### 2.路径配置

```ts
  const routes: Routes = [
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent 
      children:[{  //二级路由配置
        path:'/stores',
        component:StoreDetailComponent
      }]
    },
  ];

```

### 3.路由参数的获取以及页面跳转

获取参数的页面引入并且注入：
```ts
  import { ActivatedRoute ,Router} from '@angular/router'
  import { Location } from '@angular/common';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private location: Location
  ) {}

  this.location.back();//返回上一页
  this.router.navigateByUrl(path:string) //js实现跳转到指定路径

```
之后再this.route里面即可获取需要的路由信息

```ts
  let obsCombined = Observable.combineLatest(this.route.params, this.route.queryParams, (params, qparams) => ({
            params,
            qparams
        }));


  obsCombined.subscribe(ap => {
      console.log(ap);
      let params = ap['params'];
      let qparams = ap['qparams'];
      alert(qparams['title']);
      alert(params['id']);
  });
```

获取id举例：


```ts
  this.route.paramMap.subscribe(params => {
    let id = params.get('productId');
  }

```

### 禁止浏览器history
```html
 <a routerLink='/sharing'  skipLocationChange="false">
```


## 表单
### 配置
需要在app.module中加入ReactiveFormsModule模块
```ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

imports: [
  FormsModule,
  ReactiveFormsModule
]
```

响应式表单html结构
注意点：

[formGroup]处写上表单名称

响应式表单中的每个控件都必须要有自己的formControlName，而且不能加上双向绑定[(ngModel)]

(ngModelChange)事件会在控件值发生改变时触发，参数$event实际为改变后的值

如果控件需要要验证信息，则要在控件的html后面加上nz-form-explain标签，里面写具体的错误提示
````
<form nz-form [formGroup]="qrcodeForm">
  <nz-form-item class="nz-form-item">

    <nz-form-label class="nz-formlable" nzFor="type" nzRequired>二维码用途</nz-form-label>

    <nz-form-control>

      <nz-radio-group name="type" [nzDisabled]="id" formControlName="type" (ngModelChange)="qrcodeTypeChange($event)">
        <label nz-radio nzValue="1">扫码后关注公众号</label>
        <label nz-radio nzValue="2">扫码后参与指定活动</label>
      </nz-radio-group>
      
    </nz-form-control>

  </nz-form-item>

  <nz-form-item class="nz-form-item">

    <nz-form-label class="nz-formlable" nzFor="fissionId" nzRequired>模板活动</nz-form-label>

    <nz-form-control>

      <nz-select name="fissionId" [nzDisabled]="id" formControlName="fissionId" nzAllowClear
        style="width: 260px;" nzPlaceHolder="请选择模板活动">
        <nz-option *ngFor="let opt of fissionList" nzValue="{{ opt.id }}" nzLabel="{{ opt.name }}">
        </nz-option>
      </nz-select>

      <nz-form-explain *ngIf="qrcodeForm.get('fissionId')?.dirty && qrcodeForm.get('fissionId')?.errors">
        请选择模板活动!
      </nz-form-explain>

    </nz-form-control>

  </nz-form-item>
</form>
```
表单初始化
注意点：

如果控件初始值为空，输入框input的值要设为''，其他控件的值都要设为null，否则可能会有placeholder不显示的问题

这里写的控件名要一一与html上的formControlName对应

控件可以添加自己写的验证规则

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

// qrcodeForm: FormGroup;
// fb: FormBuilder

this.qrcodeForm = this.fb.group({
  type: ["1", [Validators.required]], // 二维码用途
  action: ["2", [Validators.required]], // 二维码类型
  name: ['', [Validators.required, this.qrcodeNameValidator]], // 二维码名称
  fissionId: [null], // 模板活动
  weixinMpId: [null, [Validators.required]], // 公众号
  expireDays: ['', [Validators.required, this.expireDaysValidator]], // 有效天数
  sourceId: [null, [Validators.required]], // 来源
  sourceContent: ['', [this.sourceContentValidator]],
  replyContent: ['']
});
表单取值
// 取表单里的单个值
let name = this.qrcodeForm.controls.name.value;

// 取表单里的所有值
let data = this.qrcodeForm.getRawValue();
表单赋值
patchValue的参数可以是多个，也可以是单个，通常都用patchValue赋值

setValue的参数必须为表单里所有的控件值，且如果赋的值验证不通过会提示错误信息

// patchValue
this.qrcodeForm.patchValue({
  type: res.type.toString(), // 二维码用途
  action: res.action.toString(), // 二维码类型
  name: res.name, // 二维码名称
  fissionId: res.fissionId ? res.fissionId.toString() : null, // 模板活动
  weixinMpId: res.weixinMpId.toString(), // 公众号
});

// setValue
this.qrcodeForm.setValue({
  type: res.type.toString(), // 二维码用途
  action: res.action.toString(), // 二维码类型
  name: res.name, // 二维码名称
  fissionId: res.fissionId ? res.fissionId.toString() : null, // 模板活动
  weixinMpId: res.weixinMpId.toString(), // 公众号
  expireDays: res.expireDays ? res.expireDays.toString() : '1', // 有效天数
  sourceId: res.sourceId.toString(), // 来源
  sourceContent: res.sourceContent, // 来源内容
  replyContent: res.replyContent
});
表单增加和删除控件项
// 增加控件项
this.qrcodeForm.addControl('point', this.fb.control(null, Validators.required));

// 删除控件项
this.qrcodeForm.removeControl('point');
表单动态增加和删除验证
页面有时候在选中一个下拉框选项时，需要隐藏或显示另外一个控件，这个控件需要把验证加上或删除，否则页面虽然看不到这个控件了，但提交表单仍可能通不过验证

clearValidators后，要调用updateValueAndValidity重新计算控件值并更新验证状态

// 增加验证
this.qrcodeForm.controls.fissionId.setValidators(Validators.required);

// 删除验证
this.qrcodeForm.controls.fissionId.clearValidators();
this.qrcodeForm.controls.fissionId.updateValueAndValidity();
提交表单
提交表单需要先在前端进行验证，需要调用public-method里的表单验证方法，校验不通过时，不用去请求接口

通过判断this.qrcodeForm.valid可以知道验证状态，true为校验通过，false为校验不通过

import { FormMethod } from '../../../common/public-method';
```ts
// 表单部分的通用方法
export const FormMethod = {

  /**
   * 更新表单状态
   * @param form FormGroup
   */

  updateFormStatus: (form: FormGroup): void => {
    // tslint:disable-next-line:forin
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
  }
};
```

// 验证每个组件，如果有错误会显示信息
FormMethod.updateFormStatus(this.qrcodeForm);

// 校验不通过，返回
if (!this.qrcodeForm.valid) {
  return;
}

TS:

```ts
  import { FormBuilder } from '@angular/forms'; 
  export class CartComponent implements OnInit {

    checkoutForm:any;
    
    constructor(
      private formBuilder: FormBuilder
    ) { 

      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
    }

    onSubmit(formData:object){
      //获取到要提交的表单的数据
      console.log('form data: ',formData);
      //购物车数据提交后需要清空
      this.cart=this.cartService.clearCart();
      //表单重置
      this.checkoutForm.reset()
    }
  }
  ```

HTML:
```html

  <form class="form" [formGroup]="checkoutForm" (ngSubmit)="onSubmit(checkoutForm.value)">
    <div class="form_cow">
      <label>Name</label>
      <input type="text" formControlName="name">
    </div>
    
    <div class="form_cow"> 
      <label>Address</label>
      <input type="text" formControlName="address">
    </div>
    
    <button class="button" nz-button nzType="primary" type="submit">submit</button>
  </form>    

```

### 防抖

```ts
  import { Observable, of, } from 'rxjs';
  import { catchError, map, tap ,switchMap,distinctUntilChanged,debounceTime,combineLatest} from 'rxjs/operators';

  private searchText$ = new Subject<string>();
  
  search(packageName: string) {
    this.searchText$.next(packageName);
  }
  
  ngOnInit() {
    this.packages$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(packageName =>
        this.searchService.search(packageName))
    );
  }
  
  constructor(private searchService: PackageSearchService) { }

```



## http

app.module；
```ts
  import {HttpClientModule,HttpClientJsonpModule  } from "@angular/common/http";

```

使用的模块引入，一般为某个service:

```ts
  import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
  import { Observable, of } from 'rxjs';
  import { catchError, map, tap ,filter} from 'rxjs/operators';


  constructor(
    private http:HttpClient
  ) { }

  //get获取数据
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
    // .toPromise();
  }
  //post发送请求

  public post(path:string,option:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    }

    return this.http.post<Hero>(path, data, httpOptions)
  }

  //请求头是不能修改的，只能重置
  httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

```
返回的数据都是一个Observable对象，使用subscribe()来获取
调用该服务;
```ts

  //请求json数据时
  this.service.post(path,parma).subscribe(
    (data: Config) => this.config = { ...data }, // success path
    error => this.error = error // error path
  )
  //请求非json数据时
  this.service.post(path,parma).pipe(
    tap(
        data => this.log(filename, data),
        error => this.logError(filename, error)
    );
  ).subscribe()

```




## RXJS

ReactiveX来自微软，它是一种针对异步数据流的编程

```ts
const ob = Observable.fromPromise(somePromise); // Promise转为Observable
const promise = someObservable.toPromise(); // Observable转为Promise
```

优点：
- 一次可发送多个请求
- 可以取消订阅

### Observable 用法
```ts
 import {Observable} from 'rxjs' 

  function xxx(){
    return new Observable((observable)=>{
      this.httpService.get('/blog',{},false).then(((res:Respones)=>{
        if(res.code===200){
          observable.next(res)
          
        }else if(res.status==='ok'){
          observable.next(res)
        }else{
          observable.error(res)
        }
      }))
    })
  }

  //调用
  xxx().pipe(
    filter((res)=>{
      return res.code>0
    }
  )
      //map
      xxx().pipe(
        map((res)=>{
          return res.data
      }
  )

  ).subscribe((res)=>{
    console.log(res);
    //这里被订阅了才会执行
  })




```

### 使用 RXJS防抖
```js
var text = document.querySelector('#text');
var inputStream = Rx.Observable.fromEvent(text, 'keyup') //为dom元素绑定'keyup'事件
                    .debounceTime(250) // 防抖动
                    .pluck('target', 'value') // 取值
                    .switchMap(url => Http.get(url)) // 将当前输入流替换为http请求
                    .subscribe(data => render(data)); // 接收数据

```


# 总结以及要注意地方

### 父子组件的传值
父组件
```ts

    import { Component, OnInit ,ViewChild} from '@angular/core';
    @ViewChild('demo') son:any;
    
    console.log("son:",this.son.str);

```
子组件
```ts
    import { Component, OnInit ,ViewChild,Input,Output,EventEmitter} from '@angular/core';
    
    
    
      public str:string="song daat00000"
    
      @Input () parentData:any;
      @Input() fromFun:any;
      @Output() testSon=new EventEmitter();
    
    
    
    
        console.log(this.parentData);
    
    
      ngAfterViewInit() {
        //在这个钩子中来操作DOM
        console.log('demo view load');
        
        let demo:any=document.getElementById('demo')
        //console.log(demo);
        console.log(this.myDemo.nativeElement.innerHTML);
      }
    
      //方法
      test(){
        this.testSon.emit('son emit')
      }
```


### 渲染
获取数据之前页面会渲染一次，直接渲染未定义的数据会报错，所以渲染数据之前要用*ngIf先进行判断；






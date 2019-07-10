import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, } from 'rxjs';
import { catchError, map, tap ,switchMap,distinctUntilChanged,debounceTime,combineLatest} from 'rxjs/operators';


import { Hero } from "../model/hero";
import { HEROES } from "../../assets/mock-heroes";
import {MessageService} from './message.service'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class HeroService {
  HEROES=[];

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { };

  updateHero (hero: Hero): Observable<any> {
    const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  
  getHeroes(): Observable<any>{//可观察的数据
    //获取数据之后立马发送一条消息
    this.log('getHeroes')
    // return of(HEROES);

    return this.http.get(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))//错误处理
    );
  }

  getHero(id:number):Observable <any>{
    
    // //return of(HEROES.find(hero => hero.id === id));
    let hero:object;
    // let heroes=this.http.get(this.heroesUrl).subscribe(res=>{

    // })
    HEROES.map((item)=>{
      if(item.id===id){
        hero=item;
      }
    })

    let selectedHero=[].concat(hero)
    
    return of(selectedHero)


    // const url = `${this.heroesUrl}/${id}`;
    // return this.http.get<Hero>(url).pipe(
    // tap(_ => this.log(`fetched hero id=${id}`)),
    // catchError(this.handleError<Hero>(`getHero id=${id}`))
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      tap(
        (newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  private log(message:string){
    this.messageService.add(`"hervice: "+${message}`)
  }


  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }




  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}

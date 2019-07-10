import { Component, OnInit } from '@angular/core';
import {Hero} from '../../model/hero'
//import {  HEROES } from '../../../assets/mock-heroes';
import {HeroService} from '../../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  // selectHero:Hero;

  heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
    console.log(this.heroes);
  }

  // onSelect(hero){
  //   console.log(hero);
  //   this.selectHero=hero
  // }

  getHeroes(){  
    this.heroService.getHeroes().subscribe(heroes => {this.heroes = heroes});//异步获取数据
  }

  add(name:string): void{
    name=name.trim();
    if(!name){return ;}
    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }


  delete(hero: Hero){
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import {Hero} from '../../model/hero'
//import {  HEROES } from '../../../assets/mock-heroes';
import {HeroService} from '../../services/hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // selectHero:Hero;

  heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
    console.log(this.heroes);
  }

  onSelect(hero:Hero){
    console.log(hero);
    // this.selectHero=hero  选择英雄
  }

  getHeroes(){  
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));//异步获取数据
  }

}

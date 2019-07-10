import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../../services/hero.service';
import {Hero} from '../../model/hero'


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getHero();
  }
 //获取英雄
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero[0]);
  }
 //返回上一步
  goBack(): void {
    this.location.back();
  }

  //存取英雄
  save(): void{
    this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
  }
}

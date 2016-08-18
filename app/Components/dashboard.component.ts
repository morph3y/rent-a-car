import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../Models/hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './app/Views/dashboard.component.html'
})

export class DashboardComponent implements OnInit { 
  private heroes: Hero[] = [];
  private _heroService: HeroService;
  private _router: Router;

  constructor(heroService: HeroService, router: Router) {
    this._heroService = heroService;
    this._router = router; 
  }

  ngOnInit() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this._router.navigate(link);
  }
}
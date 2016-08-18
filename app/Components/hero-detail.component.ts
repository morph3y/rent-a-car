import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../Models/Hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './app/Views/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  private _heroService: HeroService;
  private _route: ActivatedRoute;
  private _hero: Hero;

  constructor(heroService: HeroService, route: ActivatedRoute) {
    this._heroService = heroService;
    this._route = route;
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = +params['id']; // + converts to number
      this._heroService.getHero(id).then(hero => this._hero = hero);
    });
  }

  goBack() {
    window.history.back();
  }
}
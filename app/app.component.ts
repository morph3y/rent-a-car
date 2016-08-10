import {Component, OnInit} from '@angular/core';

import {Hero} from './Models/Hero';

import { HeroService } from './Services/hero.service';

@Component({
  selector: 'my-app',
  template: `
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>

  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  `,
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  private title: string = 'Title blah';
  private selectedHero: Hero;
  private heroes: Hero[];
  private heroService: HeroService;

  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  public onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
import {Component} from '@angular/core';
import {Hero} from './Models/Hero';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div>
    <label>id: </label>{{hero.id}}
  </div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `
})

export class AppComponent {
  private title: string = 'Title blah';
  private hero: Hero;

  constructor() {
    this.hero = new Hero();
    this.hero.name = "";
  }
}
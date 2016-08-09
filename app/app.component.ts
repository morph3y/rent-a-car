import {Component} from '@angular/core';
import {Hero} from './Models/Hero';

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>'
})

export class AppComponent {
  title = 'Title blah';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}
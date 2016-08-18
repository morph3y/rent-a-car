///
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';

import { HeroService } from './Services/hero.service';

import { DashboardComponent } from './Components/dashboard.component';
import { HeroDetailComponent } from './Components/hero-detail.component';
import { HeroesComponent } from './Components/heroes.component';

@NgModule({
  imports: [
    Routing,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
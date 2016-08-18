import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard.component';
import { HeroesComponent } from './Components/heroes.component';
import { HeroDetailComponent } from './Components/hero-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
import { Routes } from '@angular/router';
import { HomePageComponent } from './containers/home-page.component';
import { CounterPageComponent } from './containers/counter-page.component';


export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'counter',
    component: CounterPageComponent,
  },
];

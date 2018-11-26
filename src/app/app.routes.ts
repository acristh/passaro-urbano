import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'diversao', component: DiversaoComponent},
    {path: 'restaurantes', component: RestaurantesComponent}
];

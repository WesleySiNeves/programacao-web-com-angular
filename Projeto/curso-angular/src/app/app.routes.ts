import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ListRenderComponent } from './components/list-render/list-render.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'carros', component: ListRenderComponent }
];

export const AppRoutes = provideRouter(routes);

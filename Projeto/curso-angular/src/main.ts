import { Routes } from'@angular/router';
import { provideRouter } from'@angular/router';
import { FirstComponentComponent } from './app/components/first-component/first-component.component';
import { ListRenderComponent } from './app/components/list-render/list-render.component';


const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
];

export const AppRoutes = provideRouter(routes); // Exporte a configuração de roteamento corretamente
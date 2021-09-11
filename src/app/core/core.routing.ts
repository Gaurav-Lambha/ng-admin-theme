import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreComponent } from './core.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', component: DashboardComponent }
    ],
  },
];

export const CoreRoutes = RouterModule.forChild(routes);

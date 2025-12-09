import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'user', component: UserDashboardComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

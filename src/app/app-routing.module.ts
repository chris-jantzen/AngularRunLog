import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' }, // Home if authenticated, welcome if not. See how to handle this with the guard service
  { path: 'welcome', component: WelcomeComponent }, // public
  // { path: 'login', component: LoginComponent }, // public
  { path: 'signup', component: SignupComponent }, // public
  // { path: 'home', component: DashboardComponent }, // private
  // { path: 'adminHome', component: AdminDashboard }, // admin
  // { path: 'user/profile/:id', component: ProfileComponent }, // private
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

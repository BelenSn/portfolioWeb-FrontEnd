import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))}, 
  {path: 'login', component: LoginComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

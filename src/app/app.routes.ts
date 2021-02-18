import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//components

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:() => import('./modules/home/home.Module').then(m => m.HomeModule)
  },
  {
    path:'login',
    loadChildren:() => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'registration',
    loadChildren:() => import('./modules/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path:'userdetails',
    loadChildren:() => import('./modules/userdetails/userdetails.module').then(m => m.UserDetailsModule)
  },
  {
    path:'javascript',
    loadChildren:() => import('./modules/tutorials/javascript/javascript.module').then(m => m.JavascriptModule)
  },
  {
    path:'angular',
    loadChildren:() => import('./modules/tutorials/angular/angular.module').then(m => m.AngularModule)
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
    routes,
    //{useHash: true}
);
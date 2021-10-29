import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@feature/home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('@feature/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('@feature/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('@feature/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'register-one',
    loadChildren: () => import('@feature/register-one/register-one.module').then(m => m.RegisterOnePageModule)
  },
  {
    path: 'register-two',
    loadChildren: () => import('@feature/register-two/register-two.module').then(m => m.RegisterTwoPageModule)
  },
  {
    path: 'register-three',
    loadChildren: () => import('@feature/register-three/register-three.module').then(m => m.RegisterThreePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

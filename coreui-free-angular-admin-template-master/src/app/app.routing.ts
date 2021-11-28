import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import {LoginComponent } from './login/login.component';
import {RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data:{
      title: 'Homepage'
    }
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    data: {
      title: 'Home Page'
    }
  },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterTwoPage } from './register-two.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterTwoPageRoutingModule {}

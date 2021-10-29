import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterOnePage } from './register-one.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterOnePageRoutingModule {}

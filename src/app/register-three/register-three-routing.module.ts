import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterThreePage } from './register-three.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterThreePageRoutingModule {}

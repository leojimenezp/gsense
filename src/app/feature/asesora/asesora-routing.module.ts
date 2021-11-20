import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsesoraPage } from './asesora.page';

const routes: Routes = [
  {
    path: '',
    component: AsesoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsesoraPageRoutingModule {}

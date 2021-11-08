import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegDevicePage } from './reg-device.page';

const routes: Routes = [
  {
    path: '',
    component: RegDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegDevicePageRoutingModule {}

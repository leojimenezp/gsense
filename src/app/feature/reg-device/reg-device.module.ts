import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegDevicePageRoutingModule } from './reg-device-routing.module';

import { RegDevicePage } from './reg-device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegDevicePageRoutingModule
  ],
  declarations: [RegDevicePage]
})
export class RegDevicePageModule {}

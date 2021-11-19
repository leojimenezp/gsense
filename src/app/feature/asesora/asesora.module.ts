import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsesoraPageRoutingModule } from './asesora-routing.module';

import { AsesoraPage } from './asesora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsesoraPageRoutingModule
  ],
  declarations: [AsesoraPage]
})
export class AsesoraPageModule {}

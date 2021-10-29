import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterThreePageRoutingModule } from './register-three-routing.module';

import { RegisterThreePage } from './register-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterThreePageRoutingModule
  ],
  declarations: [RegisterThreePage]
})
export class RegisterThreePageModule {}

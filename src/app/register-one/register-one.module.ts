import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterOnePageRoutingModule } from './register-one-routing.module';

import { RegisterOnePage } from './register-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterOnePageRoutingModule
  ],
  declarations: [RegisterOnePage]
})
export class RegisterOnePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskIonicModule } from 'ngx-mask-ionic'

import { IonicModule } from '@ionic/angular';

import { RegisterOnePageRoutingModule } from './register-one-routing.module';

import { RegisterOnePage } from './register-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterOnePageRoutingModule,
    NgxMaskIonicModule
  ],
  declarations: [RegisterOnePage]
})
export class RegisterOnePageModule { }

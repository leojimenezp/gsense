import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

import { IonicModule } from '@ionic/angular';

import { RegisterTwoPageRoutingModule } from './register-two-routing.module';

import { RegisterTwoPage } from './register-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterTwoPageRoutingModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circle,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '8px',
      primaryColour: '#E73122'
    })
  ],
  declarations: [RegisterTwoPage]
})
export class RegisterTwoPageModule { }

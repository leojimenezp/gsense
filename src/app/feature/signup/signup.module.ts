import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
import { NgxMaskIonicModule } from 'ngx-mask-ionic'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SignupPageRoutingModule,
		NgxMaskIonicModule
	],
	declarations: [SignupPage],
})
export class SignupPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../../../environments/environment';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { LoginPage } from './login.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [LoginPage],
  providers: [GooglePlus],
})
export class LoginPageModule { }

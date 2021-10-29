import { User } from './../shared/user.interface';
import { Injectable } from '@angular/core';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) { 
   
  }

}

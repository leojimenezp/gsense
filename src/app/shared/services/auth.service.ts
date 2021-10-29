import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
    private google: GooglePlus,
  ) { }

  public authenticateWithGoogle() {
    this.google.login({}).then(response => {
      const userData = response;
    })
  }
}

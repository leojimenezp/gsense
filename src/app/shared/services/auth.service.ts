import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import firebase from '@firebase/app-compat';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFauth: AngularFireAuth,
    private google: GooglePlus,
  ) { }

  public authenticateWithGoogle() {
    return this.google.login({}).then(response => {
      const userData = response;
      return this.AFauth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(null, userData.accessToken));
    })
  }
}

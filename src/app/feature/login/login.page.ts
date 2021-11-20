import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public loginGoogle() {
    this.router.navigate(['/signup']);
    /* this.authService.authenticateWithGoogle().then(() => {
       alert('Usuario autenticado')
     }).catch(err => {
       alert('Error ' + err);
     })
   }*/
  }

}

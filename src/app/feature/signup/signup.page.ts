import { Component, OnInit } from '@angular/core';
import { UserModel } from '@shared/interfaces/user.interface';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public user: UserModel = {};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log("leoooo");

  }

  public onSubmit() {
    this.user.idPerfil = 2;
    console.log("leo");
    this.userService.createAcount(this.user).subscribe(response => {
      console.log(response);
    });
  }

}

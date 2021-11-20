import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserModel } from '@shared/interfaces/user.interface';
import { localStorageService } from '@shared/services/localstorage.service';
import { USER_DATA } from '@shared/constants/storage';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public user: UserModel = {};

  constructor(
    private storageService: localStorageService,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.user.idPerfil = 2;
    this.storageService.createStorage(USER_DATA, this.user);
    this.router.navigate(['/register-one']);
  }

  goBack(): void {
    this.navCtrl.pop();
  }

}

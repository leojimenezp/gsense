import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '@shared/interfaces/user.interface';
import { localStorageService } from '@shared/services/localstorage.service';
import { USER_DATA } from '@shared/constants/storage';

@Component({
  selector: 'app-register-one',
  templateUrl: './register-one.page.html',
  styleUrls: ['./register-one.page.scss'],
})
export class RegisterOnePage implements OnInit {

  public user: UserModel = {};

  constructor(
    private storageService: localStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStorage();
  }

  public getStorage() {

    const userData = JSON.parse(this.storageService.getStorage(USER_DATA));

    this.user.nombre = userData.nombre;
    this.user.correo = userData.correo;
    this.user.telefono = userData.telefono;
    this.user.idPerfil = userData.idPerfil;
  }

  public onSubmit() {

    this.user.fechanac = this.user.ano + '-' + this.user.mes + '-' + this.user.dia;
    this.user.peso = parseFloat(this.user.peso);
    this.user.altura = parseFloat(this.user.altura);
    this.user.cintura = parseFloat(this.user.cintura);
    this.user.hemogoblina = parseFloat(this.user.hemogoblina);
    this.storageService.createStorage(USER_DATA, this.user);
    this.router.navigate(['/register-two']);
  }

}

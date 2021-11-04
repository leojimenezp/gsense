import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '@shared/interfaces/user.interface';
import { localStorageService } from '@shared/services/localstorage.service';
import { UserService } from '@shared/services/user.service';
import { USER_DATA } from '@shared/constants/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-two',
  templateUrl: './register-two.page.html',
  styleUrls: ['./register-two.page.scss'],
})
export class RegisterTwoPage implements OnInit {

  public user: UserModel = {};

  constructor(
    private storageService: localStorageService,
    private userService: UserService,
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
    this.user.altura = userData.altura;
    this.user.ano = userData.ano;
    this.user.cintura = userData.cintura;
    this.user.fechanac = userData.fechanac;
    this.user.hemogoblina = userData.hemogoblina;
    this.user.peso = userData.peso;
    this.user.rut = userData.rut;
  }

  public onSubmit() {

    this.user.medicamentosdiab = Boolean(this.user.medicamentosdiab);
    this.user.insulinadiab = Boolean(this.user.insulinadiab);

    this.userService.createAcount(this.user).subscribe(response => {
      if (response.id != null) {
        this.storageService.removeStorage(USER_DATA);
        Swal.fire('Registro exitoso', 'Cuenta creada', 'success');
        this.router.navigate(['/login']);
      }

    });
  }

}

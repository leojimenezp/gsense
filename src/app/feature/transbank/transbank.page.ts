import { Component, OnInit } from '@angular/core';
import { TransBankService } from '@shared/services/transbank.service';
import { TransBankModel } from '@shared/interfaces/transbank.interface';
import { Subject } from 'rxjs';
import { LoaderService } from '@shared/services/loader.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-transbank',
  templateUrl: './transbank.page.html',
  styleUrls: ['./transbank.page.scss'],
})
export class TransbankPage implements OnInit {

  public transBank: TransBankModel = {};
  public listServices: any;
  public isLoading: Subject<boolean> = this.loader.isLoading;

  constructor(
    private transBankService: TransBankService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.getServices();
  }

  public getServices() {
    this.transBankService.getServices().subscribe(response => {
      this.listServices = response;
    })
  }

  public getServiceById(id: number) {
    this.transBankService.getServiceById(id).subscribe(response => {
      this.transBank.descripcion = response.descripcion;
      this.transBank.valor = response.valor;
    })
  }

  public onSubmit() {
    this.transBank.idUsuario = 13;
    this.transBank.idServicio = Number(this.transBank.idServicio);
    this.transBankService.createUserService(this.transBank).subscribe(response => {
      if (response.id != 0) {
        Swal.fire('Registro exitoso', 'Servicio pagado', 'success');
          this.transBank.idServicio = null,
          this.transBank.descripcion = '',
          this.transBank.valor = ''
          this.transBank.fechainicio = '',
          this.transBank.fechafin = ''
      }
    });
  }

}

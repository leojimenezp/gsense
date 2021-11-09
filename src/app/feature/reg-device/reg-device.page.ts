import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DeviceService } from '@shared/services/device.service';
import { DeviceModel } from '@shared/interfaces/device.interface';
import { LoaderService } from '@shared/services/loader.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reg-device',
  templateUrl: './reg-device.page.html',
  styleUrls: ['./reg-device.page.scss'],
})
export class RegDevicePage implements OnInit {

  public device: DeviceModel = {};
  public isLoading: Subject<boolean> = this.loader.isLoading;

  constructor(
    private deviceService: DeviceService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.device.idUsuario = 13;
    this.deviceService.createDevice(this.device).subscribe(response => {
      if (response.id != 0) {
        Swal.fire('Registro exitoso', 'Dispositivo creado', 'success');
        this.device.serial = '',
        this.device.deacripcion = '',
        this.device.nickname = ''
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DoctorService } from '@shared/services/doctor.service';
import { SheduleService } from '@shared/services/shedule.service';
import { SheduleModel } from '@shared/interfaces/schedule.interface';
import { Subject } from 'rxjs';
import { LoaderService } from '@shared/services/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  public shedule: SheduleModel = {};
  public listSpecialtys: any;
  public listCalendarDoctor: any;
  public isLoading: Subject<boolean> = this.loader.isLoading;

  constructor(
    private doctorService: DoctorService,
    private sheduleService: SheduleService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.getSpecialtys();
  }

  public getSpecialtys() {
    this.doctorService.getSpecialty().subscribe(specialty => {
      this.listSpecialtys = specialty;
    });
  }

  public getCalendarDoctor(specialty: string) {
    this.listCalendarDoctor = null;
    this.doctorService.getCalendarDoctorBySpecialty(specialty).subscribe(response => {
      this.listCalendarDoctor = response;
    })
  }

  public onSubmit() {

    this.shedule.idUsuario = 13;
    this.shedule.idCalendario = Number(this.shedule.idCalendario);

    this.sheduleService.createShedule(this.shedule).subscribe(response => {
      if (response.id != 0) {
        Swal.fire('Registro exitoso', 'Cita agendada', 'success');

          this.shedule.id_doctor = null,
          this.shedule.idCalendario = null
      }
    })
  }

}

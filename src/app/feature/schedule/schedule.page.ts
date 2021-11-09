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
  public listDoctors: any;
  public listCalendarDoctor: any;
  public isLoading: Subject<boolean> = this.loader.isLoading;

  constructor(
    private doctorService: DoctorService,
    private sheduleService: SheduleService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  public getDoctors() {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.listDoctors = doctors;
    });
  }

  public getCalendarDoctor(id: number) {
    this.listCalendarDoctor = null;
    this.doctorService.getCalendarDoctorById(id).subscribe(response => {
      this.listCalendarDoctor = Array.of(response);
    })
  }

  public onSubmit() {

    this.shedule.id_usuario = 13;
    this.shedule.id_calendario = Number(this.shedule.id_calendario);

    this.sheduleService.createShedule(this.shedule).subscribe(response => {
      if (response.id != 0) {
        Swal.fire('Registro exitoso', 'Cita agendada', 'success');

          this.shedule.id_doctor = null,
          this.shedule.id_calendario = null
      }
    })
  }

}

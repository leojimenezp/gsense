import { Component, OnInit } from '@angular/core';
import { DoctorService } from '@shared/services/doctor.service';
import { QuoteModel } from '@shared/interfaces/quote.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  public quote: QuoteModel = {};
  public listDoctors: any;

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  public getDoctors() {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.listDoctors = doctors;
    });
  }

  public getCalendarDoctor(id_usuario: number) {
    alert(id_usuario)

  }

}

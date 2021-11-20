import { Component, OnInit } from '@angular/core';
import { DoctorService } from '@shared/services/doctor.service';
@Component({
  selector: 'app-asesora',
  templateUrl: './asesora.page.html',
  styleUrls: ['./asesora.page.scss'],
})
export class AsesoraPage implements OnInit {

  public listSpecialtys: any;

  constructor(
    private doctorService: DoctorService,
  ) { }

  ngOnInit() {
    this.getSpecialtys();
  }

  public getSpecialtys() {
    this.doctorService.getSpecialty().subscribe(specialty => {
      this.listSpecialtys = specialty;
    });
  }

}

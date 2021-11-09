import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, DOCTOR } from '@shared/constants/endPoint';
import { DoctorModel } from '@shared/interfaces/doctor.interface';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    constructor(private http: HttpClient) { }

    public getDoctors(): Observable<DoctorModel> {
        return this.http.get<DoctorModel>(`${API}/${DOCTOR}`);
    }
}

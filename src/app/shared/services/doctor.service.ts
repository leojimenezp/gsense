import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, DOCTOR, DOCTOR_CALENDAR, SPECIALTY } from '@shared/constants/endPoint';
import { DoctorModel } from '@shared/interfaces/doctor.interface';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    constructor(private http: HttpClient) { }

    public getDoctors(): Observable<DoctorModel> {
        return this.http.get<DoctorModel>(`${API}/${DOCTOR}`);
    }

    public getSpecialty(): Observable<any> {
        return this.http.get<any>(`${API}/${SPECIALTY}`);
    }

    public getSpecialtyBySpecialty(specialty: string): Observable<any> {
        return this.http.get<any>(`${API}/${SPECIALTY}/${specialty}`);
    }

    public getCalendarDoctorBySpecialty(specialty: string) {
        return this.http.get<any>(`${API}/${DOCTOR_CALENDAR}/` + specialty);
    }
}

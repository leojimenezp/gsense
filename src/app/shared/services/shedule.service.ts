import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, SHEDULE } from '@shared/constants/endPoint';
import { SheduleModel } from '@shared/interfaces/schedule.interface';

@Injectable({
    providedIn: 'root'
})
export class SheduleService {

    constructor(private http: HttpClient) { }

    public createShedule(data: SheduleModel): Observable<SheduleModel> {
        return this.http.post<SheduleModel>(`${API}/${SHEDULE}`, data);
    }
}

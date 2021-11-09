import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, DEVICE } from '@shared/constants/endPoint';
import { DeviceModel } from '@shared/interfaces/device.interface';

@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    constructor(private http: HttpClient) { }

    public createDevice(data: DeviceModel): Observable<DeviceModel> {
        return this.http.post<DeviceModel>(`${API}/${DEVICE}`, data);
    }
}

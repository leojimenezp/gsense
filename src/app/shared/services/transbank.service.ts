import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, SERVICES, USER_SERVICE } from '@shared/constants/endPoint';
import { TransBankModel } from '@shared/interfaces/transbank.interface';

@Injectable({
    providedIn: 'root'
})
export class TransBankService {

    constructor(private http: HttpClient) { }

    public getServices(): Observable<any> {
        return this.http.get<any>(`${API}/${SERVICES}`);
    }

    public getServiceById(id: number): Observable<any> {
        return this.http.get<any>(`${API}/${SERVICES}/` + id);
    }

    public createUserService(data: TransBankModel): Observable<TransBankModel> {
        return this.http.post<TransBankModel>(`${API}/${USER_SERVICE}`, data);
    }
}
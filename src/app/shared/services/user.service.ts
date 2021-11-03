import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, USER } from '@shared/constants/endPoint';
import { UserModel } from '@shared/interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    public createAcount(data: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>(`${API}/${USER}`, data);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, TYPE_FOOD, LOG_FOOD, FOOD } from '@shared/constants/endPoint';
import { FoodModel } from '@shared/interfaces/food.interface';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    constructor(private http: HttpClient) { }

    public getTypeFood(): Observable<any> {
        return this.http.get<any>(`${API}/${TYPE_FOOD}`);
    }

    public getFood(): Observable<any> {
        return this.http.get<any>(`${API}/${FOOD}`);
    }

    public createLogFood(data: FoodModel): Observable<FoodModel> {
        return this.http.post<FoodModel>(`${API}/${LOG_FOOD}`, data);
    }
}

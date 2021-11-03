import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class localStorageService {

    constructor() { }

    public createStorage(name: string, data: any) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    public getStorage(name: string) {
        return localStorage.getItem(name)
    }
}

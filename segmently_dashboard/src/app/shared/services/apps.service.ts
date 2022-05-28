import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppsService {
    constructor(private http: HttpClient) {}

    public getfeatureFormBuildData(): Observable<any> {
        return this.http.get("assets/data/build/features_form_build_data.json")
    }

    
}
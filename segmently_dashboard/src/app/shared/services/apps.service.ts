import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppsService {
    constructor(private http: HttpClient) {}

    public getfeatureFormBuildData(): Observable<any> {
        return this.http.get("assets/data/build/features_form_build_data.json")
    }

    public createBuildConfigData(name: string, segment: string, config_input_data: any): Observable<any> {
        return this.http.post<any>(environment.API_URL + '/api/v1/core/build-config/', { 
            name: name,
            segment: segment,
            config_input_data: JSON.stringify(config_input_data),
            analytics_output_data: ""
        })
    }

    
}
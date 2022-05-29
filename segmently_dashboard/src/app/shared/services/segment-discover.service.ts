import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SegmentDiscoverService {
    
    constructor(private http: HttpClient) {}

    public getSegmentWiseDasbboardData(segment): Observable<any> {
        return this.http.get(environment.API_URL + "/api/v1/core/discover-insights/?page_size=1&segment=" + segment.label)
    }

    

    
}


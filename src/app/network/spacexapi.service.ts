import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Mission } from '../models/mission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  private URL = 'https://api.spacexdata.com/v3/launches'

  constructor(private httpClient: HttpClient) { }

  getMissionList(): Observable<Mission[]>{
    return this.httpClient.get<Mission[]>('https://api.spacexdata.com/v3/launches');
  }

  getMission(id:number): Observable<Mission>{
    return this.httpClient.get<Mission>(`https://api.spacexdata.com/v3/launches/${id}`);
  }
}

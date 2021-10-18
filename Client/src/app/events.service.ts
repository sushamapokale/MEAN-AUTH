import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(  private http: HttpClient) { }
  events():Observable<any>{
    return this.http.get<any[]>("http://localhost:3002/user/events")
  }
  special():Observable<any>{
    return this.http.get<any[]>("http://localhost:3002/user/special")
  }
}

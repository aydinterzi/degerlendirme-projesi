import { GuestDetail } from './../models/guest-detail';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestDetailsService {
  apiUrl='https://www.icibot.net/v2/api/app_me';
  constructor(private http:HttpClient) { }

  getDetail():Observable<GuestDetail>{
    return this.http.get<GuestDetail>(this.apiUrl);
  }
}

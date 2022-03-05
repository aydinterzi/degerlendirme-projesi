import { Observable } from 'rxjs';
import { Survey } from './../models/survey';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  apiUrl='https://www.icibot.net/v2/api/main_survey/24';
  constructor(private http:HttpClient) { }

  getSurvey():Observable<Survey>{
   return this.http.get<Survey>(this.apiUrl);
  }
}

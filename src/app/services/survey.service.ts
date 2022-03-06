import { ResponseSurvey } from './../models/responseSurvey';
import { Observable } from 'rxjs';
import { Survey } from './../models/survey';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SurveyAnswers } from '../models/survey_answers';
import { AnswersNote } from '../models/answers_note';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  apiUrl='https://www.icibot.net/v2/api';
  constructor(private http:HttpClient) { }

  getSurvey():Observable<Survey>{
   return this.http.get<Survey>(this.apiUrl+"/main_survey/24");
  }

  answerSurvey(answerSurvey:AnswersNote):Observable<ResponseSurvey>{
    return this.http.post<ResponseSurvey>(this.apiUrl+"/survey_answer",answerSurvey);
  }
}

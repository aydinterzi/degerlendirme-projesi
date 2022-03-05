import { Survey } from './../../models/survey';
import { SurveyService } from './../../services/survey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private surveyService:SurveyService) { }

  survey:Survey;
  ngOnInit(): void {
    this.getSurvey();
  }

  getSurvey(){
    this.surveyService.getSurvey().subscribe(data=>{
      console.log(data);
      this.survey=data;
    })
  }


}

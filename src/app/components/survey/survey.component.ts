import { AlertifyService } from './../../services/alertify.service';
import { AnswersNote } from '../../models/answers_note';
import { SurveyAnswers } from './../../models/survey_answers';
import { Survey } from './../../models/survey';
import { SurveyService } from './../../services/survey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {
  constructor(private surveyService: SurveyService,private alertify:AlertifyService) {}

  survey: Survey;
  anwers: SurveyAnswers[] = [];
  surveyanswer: AnswersNote={note:"",survey_answers:[]};

  ngOnInit(): void {
    this.getSurvey();
  }

  getSurvey() {
    this.surveyService.getSurvey().subscribe((data) => {
      this.survey = data;
    });
  }

  submit() {
    let radio = document.getElementsByTagName('input');
    let note = document.getElementById('note')["value"];
    let j = 0;
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        let answer = new SurveyAnswers();
        answer.hotel_id = this.survey.hotel_id;
        answer.survey_header_id = this.survey.survey_lines[j].survey_header_id;
        answer.survey_line_id = this.survey.survey_lines[j].id;
        answer.question_group = '';
        answer.question = this.survey.survey_lines[j].question;
        answer.description = '';
        answer.priority = 1;
        answer.profile_id = 17201;
        answer.answer = radio[i].value;
        answer.answer_numeric = +radio[i].value;
        answer.question_type = this.survey.survey_lines[j].question_type;
        this.anwers.push(answer);
        j++;
      }
    }
    this.surveyanswer.survey_answers = this.anwers;
    this.surveyanswer.note = note;
    this.surveyService.answerSurvey(this.surveyanswer).subscribe((data) => {
      if (data.survey_result >= 7){
        alert(data.survey_header.thanks_message_for_positive_reviews);
        if(data.survey_header.positive_redirect_urls[0])
          window.location.href = data.survey_header.positive_redirect_urls[0];
      }
        else alert(data.survey_header.thanks_message_for_negative_reviews);
    });
  }
}

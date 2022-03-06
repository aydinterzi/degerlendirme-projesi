import { SurveyAnswers } from './survey_answers';
import { SurveyHeader } from './survey_header';
export class ResponseSurvey{
    id:number;
    hotel_id:number;
    hotel_name:string;
    profile_id:number;
    profile_name:string;
    survey_header_id:number;
    survey_header_name:string;
    survey_header:SurveyHeader;
    survey_header_description:string;
    survey_result:number;
    profile_note:string;
    assessing_user_id:number;
    assessing_user_name:string;
    user_note:string;
    survey_answers:SurveyAnswers;
}

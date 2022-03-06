import { SurveyLines } from "./survey_lines";

export class SurveyHeader{
  id:number;
  hotel_id:number;
  hotel_name:string;
  question_groups:string[];
  name:string;
  description:string;
  status:string;
  notify_type:string;
  sending_result_type:string;
  emails:string;
  positive_redirect_urls:string[];
  thanks_message_for_positive_reviews:string;
  thanks_message_for_negative_reviews:string;
  ask_note_after_survey:boolean;
  created_at:string;
  updated_at:string;
  survey_lines:SurveyLines[];
}

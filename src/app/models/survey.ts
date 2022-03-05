import { SurveyLines } from './survey_lines';
export class Survey{
  id:number;
  hotel_id:number;
  hotel_name:string;
  name:string;
  description:string;
  status:string;
  notify_type:string;
  sending_result_type:string;
  emails:string;
  survey_lines:SurveyLines[];
}

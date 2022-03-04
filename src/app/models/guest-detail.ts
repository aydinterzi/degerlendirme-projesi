import { LoyaltyInfo } from "./loyalty_info";

export class GuestDetail{
  id:number;
  hotel_id:number;
  first_name:string;
  last_name:string;
  profile_pic_url:string;
  locale:string;
  room_no:string;
  entry_date:string;
  release_date:string;
  phone_no:string;
  booking_date:string;
  date_of_birth:string;
  e_mail:string;
  wedding_anniversary:string;
  loyalty_info:LoyaltyInfo;
  pillow_type:string;
  bed_type:string;
}

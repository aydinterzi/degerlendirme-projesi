import { GuestDetail } from './../../models/guest-detail';
import { GuestDetailsService } from 'src/app/services/guest-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css']
})
export class GuestDetailComponent implements OnInit {

  constructor(private guestDetail:GuestDetailsService) { }
  details:GuestDetail;
  ngOnInit(): void {
    this.getDetail();
  }

  getDetail(){
    this.guestDetail.getDetail().subscribe(response=>{
      console.log(response);
      this.details=response;
    })
  }

}
